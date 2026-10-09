import { NextResponse } from 'next/server';
import { generalEnquiryProduct, products } from '@/lib/content';

function clean(value: unknown, max = 3000) {
  return String(value ?? '').trim().slice(0, max);
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    if (!body || typeof body !== 'object' || Array.isArray(body)) {
      return NextResponse.json({ error: 'Please submit a valid enquiry.' }, { status: 400 });
    }
    const data = body as Record<string, unknown>;
    if (clean(data.website, 100)) return NextResponse.json({ ok: true });

    const productId = clean(data.product, 100);
    const selectedProduct = productId && productId !== generalEnquiryProduct.slug
      ? products.find((product) => product.slug === productId)
      : undefined;
    if (productId && productId !== generalEnquiryProduct.slug && !selectedProduct) {
      return NextResponse.json({ error: 'Please select a valid product of interest.' }, { status: 400 });
    }
    const productName = selectedProduct?.name || generalEnquiryProduct.name;

    const name    = clean(data.name,    80);
    const company = clean(data.company, 120);
    const email   = clean(data.email,   160);
    const phone   = clean(data.phone,   30);
    const message = clean(data.message, 3000);

    if (!name || !email || !phone || !message || !isEmail(email)) {
      return NextResponse.json({ error: 'Please enter valid contact details and requirements.' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from   = process.env.CONTACT_FROM_EMAIL;
    const to     = process.env.CONTACT_TO_EMAIL;

    if (!apiKey || !from || !to) {
      return NextResponse.json(
        { error: 'The enquiry form is not configured yet. Please call or email A.D. Enterprises directly.' },
        { status: 503 }
      );
    }

    // Build recipient list: primary + optional secondary
    const toList = [to];
    const secondary = process.env.CONTACT_TO_EMAIL_SECONDARY;
    if (secondary && isEmail(secondary)) toList.push(secondary);

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from,
        to: toList,
        reply_to: email,
        subject: selectedProduct
          ? `New enquiry for ${productName} from ${name}`
          : `New website enquiry from ${name}`,
        text: `Product of interest: ${productName}\nName: ${name}\nCompany: ${company || '-'}\nEmail: ${email}\nPhone: ${phone}\n\nRequirements:\n${message}`
      })
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Unable to deliver the enquiry right now. Please call or email us directly.' },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Unable to process the enquiry. Please try again.' }, { status: 500 });
  }
}
