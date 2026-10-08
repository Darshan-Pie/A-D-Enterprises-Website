import Link from 'next/link';
import { company, products } from '@/lib/content';
import { PhoneIcon, MailIcon, MapPinIcon } from '@/components/Icons';
import BrandLogo from '@/components/BrandLogo';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        {/* Main 4-column structured corporate directory */}
        <div className="footer-grid" data-reveal>
          {/* Group 1: Company */}
          <div className="footer-col">
            <h3 className="footer-heading">COMPANY</h3>
            <ul className="footer-list">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/quality">Quality &amp; Testing</Link></li>
              <li><Link href="/infrastructure">Infrastructure</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><a href="/AD_ENTERPRISES.pdf" target="_blank" rel="noreferrer">Download Brochure</a></li>
            </ul>
          </div>

          {/* Group 2: Products */}
          <div className="footer-col">
            <h3 className="footer-heading">PRODUCTS</h3>
            <ul className="footer-list">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link href={`/products#${p.slug}`}>{p.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Group 3: Contact */}
          <div className="footer-col">
            <h3 className="footer-heading">CONTACT</h3>
            <div className="footer-contact-group">
              {company.contacts.map((person) => (
                <div className="footer-contact-person" key={person.phone}>
                  <span className="footer-contact-name">{person.name}</span>
                  <a href={`tel:${person.phone.replace(/\s/g, '')}`} className="footer-link-with-icon" aria-label={`Call ${person.name}`}>
                    <PhoneIcon size={13} />
                    <span>{person.phone}</span>
                  </a>
                  <a href={`mailto:${person.email}`} className="footer-link-with-icon" aria-label={`Email ${person.email}`}>
                    <MailIcon size={13} />
                    <span>{person.email}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Group 4: Visit Us */}
          <div className="footer-col">
            <h3 className="footer-heading">VISIT US</h3>
            <div className="footer-visit-group">
              <span className="footer-location-title">Ahmedabad, Gujarat</span>
              <p className="footer-address-snippet">
                32, 33, 38, 39 Shyam Industrial Hub,<br />
                Bakrol Bujrang, Daskroi,<br />
                Ahmedabad - 382433
              </p>
              <a
                href={company.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="footer-directions-btn"
                aria-label="Get directions to A.D. Enterprises on Google Maps"
              >
                <MapPinIcon size={13} />
                <span>Get Directions</span>
              </a>
            </div>
          </div>
        </div>

        {/* Compact bottom bar */}
        <div className="footer-bottom" data-reveal>
          <div className="footer-bottom-brand">
            <BrandLogo variant="primaryLight" width={220} className="footer-logo" sizes="220px" />
          </div>
          <div className="footer-bottom-meta">
            <span>© {new Date().getFullYear()} A.D. Enterprises. All rights reserved.</span>
            <span className="footer-sep">•</span>
            <span>ISO 9001:2015 certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
