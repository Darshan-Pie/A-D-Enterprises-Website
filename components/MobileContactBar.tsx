import { company, whatsappUrl } from '@/lib/content';
import { WhatsAppIcon, PhoneIcon, MailIcon, MapPinIcon } from '@/components/Icons';

export default function MobileContactBar() {
  const message = 'Hello A.D. Enterprises, I found your website and would like to discuss a requirement.';
  const primaryContact = company.contacts[0];
  return (
    <nav className="mobile-contact-bar" aria-label="Quick contact actions">
      <a
        className="mcb-item mcb-whatsapp"
        href={whatsappUrl(primaryContact.whatsapp, message)}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp A.D. Enterprises"
      >
        <WhatsAppIcon size={20} />
        <span>WhatsApp</span>
      </a>
      <a
        className="mcb-item"
        href={`tel:${primaryContact.phone.replace(/\s/g, '')}`}
        aria-label={`Call ${primaryContact.phone}`}
      >
        <PhoneIcon size={20} />
        <span>Call</span>
      </a>
      <a
        className="mcb-item"
        href={`mailto:${primaryContact.email}`}
        aria-label={`Email ${primaryContact.email}`}
      >
        <MailIcon size={20} />
        <span>Email</span>
      </a>
      <a
        className="mcb-item"
        href={company.mapsUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Open location in Google Maps"
      >
        <MapPinIcon size={20} />
        <span>Directions</span>
      </a>
    </nav>
  );
}
