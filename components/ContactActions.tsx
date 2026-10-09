import { company, whatsappUrl } from '@/lib/content';
import { MailIcon, PhoneIcon, WhatsAppIcon } from '@/components/Icons';

export default function ContactActions() {
  const message = 'Hello A.D. Enterprises, I would like to request a quotation for an LV switchboard / LT bus duct requirement.';

  return (
    <section className="contact-quick-contact" aria-labelledby="contact-quick-heading">
      <h3 className="contact-info-eyebrow" id="contact-quick-heading">QUICK CONTACT</h3>
      <div className="contact-people-list">
        {company.contacts.map((person) => {
          const cleanPhone = person.phone.replace(/\s/g, '');

          return (
            <article className="contact-person" key={person.phone}>
              <h4>{person.name}</h4>
              <a className="contact-person-detail" href={`tel:${cleanPhone}`} aria-label={`Call ${person.name} at ${person.phone}`}>
                <PhoneIcon size={16} />
                <span>{person.phone}</span>
              </a>
              <a className="contact-person-detail contact-person-email" href={`mailto:${person.email}`} aria-label={`Email ${person.name} at ${person.email}`}>
                <MailIcon size={16} />
                <span>{person.email}</span>
              </a>
              <div className="contact-person-actions">
                <a className="contact-person-action contact-person-action--call" href={`tel:${cleanPhone}`} aria-label={`Call ${person.name}`}>
                  <PhoneIcon size={16} />
                  <span>Call</span>
                </a>
                <a
                  className="contact-person-action contact-person-action--whatsapp"
                  href={whatsappUrl(person.whatsapp, message)}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`WhatsApp ${person.name}`}
                >
                  <WhatsAppIcon size={16} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
