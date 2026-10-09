import Image from 'next/image';
import ContactForm from '@/components/ContactForm';
import ContactActions from '@/components/ContactActions';
import { FileIcon, MapPinIcon } from '@/components/Icons';
import { company } from '@/lib/content';
import BrandLogo from '@/components/BrandLogo';
import PageIntro from '@/components/PageIntro';

export const metadata = { title: 'Contact' };

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="CONTACT" title="Request a Quotation" description="Share the application, ratings and project timeline to begin an enquiry." />

      {/* QUOTATION FORM + COMPANY CONTACT PANEL */}
      <section className="section" data-reveal>
        <div className="container contact-layout">
          {/* Form panel */}
          <div className="contact-panel">
            <div className="eyebrow">PROJECT ENQUIRY</div>
            <h2>Request a quotation</h2>
            <p className="contact-panel-subtext">Fill in your specifications or enquiry details below. Our engineering team will follow up promptly.</p>
            <ContactForm />
          </div>

          {/* Company and contact details */}
          <aside className="contact-info">
            <div className="contact-image" data-reveal-image>
              <Image
                src="/images/contact-bg.png"
                alt="A.D. Enterprises manufacturing facility"
                fill
                sizes="(max-width:900px) 100vw, 35vw"
              />
            </div>
            <div className="contact-copy contact-info-content">
              <header className="contact-company-identity">
                <BrandLogo variant="mark" width={64} className="contact-company-mark" sizes="64px" />
                <div>
                  <h2>{company.name}</h2>
                  <p>{company.tagline}</p>
                </div>
              </header>

              <a
                className="button button-primary cp-btn-icon contact-brochure-button"
                href="/AD_ENTERPRISES.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <FileIcon size={16} />
                <span>Download company brochure</span>
              </a>

              <ContactActions />

              <section className="contact-visit" aria-labelledby="contact-visit-heading">
                <h3 className="contact-info-eyebrow" id="contact-visit-heading">VISIT US</h3>
                <address>
                  {company.addressLines.map((line) => <span key={line}>{line}<br /></span>)}
                </address>
                <a
                  className="contact-directions-link"
                  href={company.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Get directions to A.D. Enterprises on Google Maps"
                >
                  <MapPinIcon size={17} />
                  <span>Get Directions</span>
                </a>
              </section>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
