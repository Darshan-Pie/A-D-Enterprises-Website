import Image from 'next/image';
import Link from 'next/link';
import { company, whatsappUrl } from '@/lib/content';
import { ArrowRightIcon, WhatsAppIcon } from '@/components/Icons';

type Product = {
  slug: string;
  name: string;
  short: string;
  image: string;
};

export default function ProductCard({ product }: { product: Product }) {
  const message = `Hello A.D. Enterprises, I am interested in your ${product.name}. Please share the technical details and quotation process.`;

  return (
    <article className="product-card" id={`product-${product.slug}`} data-reveal>
      <div className="product-image-container" data-reveal-image>
        <Image
          src={product.image}
          alt={`${product.name} manufactured by A.D. Enterprises`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="product-image-overlay" />
      </div>

      <div className="product-content">
        <div className="product-meta">
          <span className="product-kicker">LV ENGINEERING</span>
        </div>
        <h3 className="product-title">{product.name}</h3>
        <p className="product-description">{product.short}</p>

        <div className="product-actions">
          <Link href={`/products#${product.slug}`} className="product-link">
            <span>Explore</span>
            <ArrowRightIcon size={14} />
          </Link>
          <a
            href={whatsappUrl(company.contacts[0].whatsapp, message)}
            target="_blank"
            rel="noreferrer"
            className="product-whatsapp-btn"
            aria-label={`Enquire about ${product.name} via WhatsApp`}
          >
            <WhatsAppIcon size={13} />
            <span>Enquire</span>
          </a>
        </div>
      </div>
    </article>
  );
}
