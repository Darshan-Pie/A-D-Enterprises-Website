import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/lib/content';
import PageIntro from '@/components/PageIntro';
export const metadata = { title: 'Products' };
export default function Products(){return <>
 <PageIntro eyebrow="PRODUCTS" title="LV Switchboards & Bus Ducts" description="Explore the LV switchboards and LT bus duct products described in the company brochure." />
 <section className="section" data-reveal><div className="container product-detail-grid">{products.map(p=><article className="product-detail" id={p.slug} key={p.slug}><div className="product-detail-image" data-reveal-image><Image src={p.image} alt={p.name} fill sizes="(max-width:900px) 100vw, 38vw"/></div><div><div className="product-kicker">A.D. ENTERPRISES</div><h2>{p.name}</h2><p className="lead">{p.short}</p><p>{p.detail}</p><Link className="text-link" href="/contact">Ask about this product <span>→</span></Link></div></article>)}</div></section>
 <section className="cta-section" data-reveal><div className="container cta-card"><div><div className="eyebrow">PROJECT ENQUIRY</div><h2>Need a custom configuration?</h2><p>Share the rating, configuration, application and timeline so the requirement can be reviewed.</p></div><Link className="button button-primary" href="/contact">Send requirement</Link></div></section>
 </>}
