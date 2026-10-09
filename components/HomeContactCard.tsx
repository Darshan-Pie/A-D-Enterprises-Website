import Image from 'next/image';
import { company, whatsappUrl } from '@/lib/content';
import { FileIcon, MailIcon, MapPinIcon, PhoneIcon, WhatsAppIcon } from '@/components/Icons';
import BrandLogo from '@/components/BrandLogo';

export default function HomeContactCard() {
  const message = 'Hello A.D. Enterprises, I would like to discuss an LV switchboard / LT bus duct requirement.';

  return (
    <article className="home-contact-card" aria-label="A.D. Enterprises company and contact details">
      <div className="home-contact-image">
        <Image
          src="/images/contact-bg.png"
          alt="A.D. Enterprises manufacturing facility"
          fill
          sizes="(max-width: 760px) 100vw, 760px"
        />
      </div>

      <div className="home-contact-content">
        <header className="home-contact-identity">
          <h2 className="home-contact-brand home-contact-primary-heading"><BrandLogo variant="primary" width={270} className="home-contact-logo" sizes="270px" /></h2>
          <div className="home-contact-mobile-identity">
            <BrandLogo variant="mark" width={60} className="home-contact-mark" sizes="60px" />
            <div>
              <h2 className="home-contact-brand">{company.name}</h2>
              <p>{company.tagline}</p>
            </div>
          </div>
        </header>

        <a className="button button-primary home-brochure-button" href="/AD_ENTERPRISES.pdf" target="_blank" rel="noreferrer">
          <FileIcon size={16} />
          <span>Download company brochure</span>
        </a>

        <section className="home-quick-contact" aria-labelledby="home-quick-contact-heading">
          <h2 className="eyebrow" id="home-quick-contact-heading">QUICK CONTACT</h2>
          <div className="home-contact-people">
            {company.contacts.map((person) => {
              const cleanPhone = person.phone.replace(/\s/g, '');

              return (
                <div className="home-contact-person" key={person.phone}>
                  <div className="home-contact-details">
                    <strong className="home-contact-name">{person.name}</strong>
                    <a className="home-contact-phone" href={`tel:${cleanPhone}`} aria-label={`Call ${person.name} at ${person.phone}`}>
                      <PhoneIcon size={16} />
                      <span>{person.phone}</span>
                    </a>
                    <a className="home-contact-email" href={`mailto:${person.email}`} aria-label={`Email ${person.name} at ${person.email}`}>
                      <MailIcon size={15} />
                      <span>{person.email}</span>
                    </a>
                  </div>

                  <div className="home-contact-actions">
                    <a className="home-contact-action home-contact-action--call" href={`tel:${cleanPhone}`} aria-label={`Call ${person.name}`}>
                      <PhoneIcon size={16} />
                      <span>Call</span>
                    </a>
                    <a
                      className="home-contact-action home-contact-action--whatsapp"
                      href={whatsappUrl(person.whatsapp, message)}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`WhatsApp ${person.name}`}
                    >
                      <WhatsAppIcon size={16} />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <div className="home-contact-location">
          <div className="home-contact-location-name">Ahmedabad, Gujarat</div>
          <a href={company.mapsUrl} target="_blank" rel="noreferrer" aria-label="Get directions to A.D. Enterprises in Ahmedabad">
            <MapPinIcon size={16} />
            <span>Get Directions</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </article>
  );
}
