const contactPeople = [
  { name: 'Akash Chhatbar', phone: '+91 93770 38505', email: 'akashet@yahoo.com', whatsapp: '919377038505' },
  { name: 'Dhiren Machchhar', phone: '+91 78780 32927', email: 'ade.dhiren@yahoo.com', whatsapp: '917878032927' },
];

const postalAddress = {
  premises: '32, 33, 38, 39 Shyam Industrial Hub',
  street: 'Kujad Gatrad Road',
  locality: 'Bakrol Bujrang, Daskroi',
  city: 'Ahmedabad',
  postalCode: '382433',
  region: 'Gujarat',
  country: 'India',
  countryCode: 'IN',
};

const addressLines = [
  `${postalAddress.premises},`,
  `${postalAddress.street},`,
  `${postalAddress.locality},`,
  `${postalAddress.city} - ${postalAddress.postalCode},`,
  `${postalAddress.region}, ${postalAddress.country}`,
];

export const company = {
  name: 'A.D. ENTERPRISES',
  tagline: 'Manufacturer of LV Switch Boards & LT Bus Duct',
  since: '2006',
  contacts: contactPeople,
  primaryContactName: contactPeople[0].name,
  primaryPhone: contactPeople[0].phone,
  emailPrimary: contactPeople[0].email,
  secondaryContactName: contactPeople[1].name,
  secondaryPhone: contactPeople[1].phone,
  emailSecondary: contactPeople[1].email,
  // Keep the existing aliases for components that already consume these fields.
  phone: contactPeople.map((person) => person.phone),
  email: contactPeople[0].email,
  addressLines,
  address: addressLines.join(' '),
  postalAddress: {
    streetAddress: `${postalAddress.premises}, ${postalAddress.street}`,
    addressLocality: `${postalAddress.locality}, ${postalAddress.city}`,
    postalCode: postalAddress.postalCode,
    addressRegion: postalAddress.region,
    addressCountry: postalAddress.countryCode,
  },
  landingPage: 'https://a-d-enterprise-landing-page.vercel.app/',
  website: 'https://a-d-enterprise-landing-page.vercel.app/',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=A.D.+ENTERPRISES+Shyam+Industrial+Hub+Bakrol+Bujrang+Ahmedabad',
};

export function whatsappUrl(phone: string, message: string) {
  const normalized = phone.replace(/\D/g, '');
  return `https://wa.me/${normalized}?text=${encodeURIComponent(message)}`;
}

export const products = [
  { slug: 'power-control-centre', name: 'Power Control Centre (PCC)', short: 'High-capacity LV power distribution and control panels.', detail: 'The brochure describes PCC panels built for substantial current loads up to 6300 A, with ACBs, MCCBs, MCBs, copper or aluminium busbars, and metering/protection sections.', image: '/images/pcc.png' },
  { slug: 'motor-control-centre', name: 'Motor Control Centre (MCC)', short: 'Fixed or drawout motor control with protection and intelligent starting options.', detail: 'MCC configurations include DOL and star-delta starters, breakers, contactors, overload relays, MPCBs, single-phase preventers, timers, VFDs and soft starters.', image: '/images/mcc.png' },
  { slug: 'starter-vfd-panel', name: 'Starter & VFD Panel', short: 'Motor starting and variable-speed control solutions.', detail: 'The brochure presents intelligent motor-control solutions incorporating variable frequency drives and soft starters for efficient speed control and motor protection.', image: '/images/starter-vfd.png' },
  { slug: 'apfc-panel', name: 'APFC Panel', short: 'Automatic power-factor correction and reactive-power management.', detail: 'APFC assemblies may include breakers, APFC controllers, heavy-duty contactors, thyristor switching, detuned reactors and heavy-duty capacitors.', image: '/images/apfc.png' },
  { slug: 'amf-panel', name: 'AMF Panel', short: 'Automatic mains-failure transfer for continuity of supply.', detail: 'AMF panels respond to main-supply failure by disconnecting the source, triggering generator operation and transferring the load to maintain continuity.', image: '/images/sync-amf.png' },
  { slug: 'synchronizing-panel', name: 'Synchronizing Panel', short: 'Generator synchronization, load sharing and power-management control.', detail: 'The brochure highlights synchronizing relays for synchronization, load sharing and controlled generator activation/deactivation based on load requirements.', image: '/images/sync-amf.png' },
  { slug: 'outdoor-feeder-pillar', name: 'Outdoor Feeder Pillar', short: 'Durable LV distribution enclosure for outdoor environments.', detail: 'Designed for rugged outdoor conditions with protection against dust, solids and water, while supporting practical installation and maintenance.', image: '/images/feeder-pillar.png' },
  { slug: 'lt-bus-duct', name: 'LT Bus Duct', short: 'Low-voltage bus duct solutions up to 6300 A.', detail: 'Constructed from CRCA sheet steel with configurable phase arrangements, flexible joints and outdoor canopy options for power transmission between transformers and switchboards.', image: '/images/lt-bus-duct.png' }
];

export const qualityStats = [
  { value: '70 kA', label: 'Short-circuit withstand test', note: 'IEC 61439 • CPRI Bhopal' },
  { value: '100 kA', label: 'Short-circuit withstand test', note: 'IS 8623 • ERDA Gujarat' },
  { value: 'IP65', label: 'Degree of protection tested', note: 'IEC 61439' },
  { value: '6300 A', label: 'Maximum stated rating', note: 'As described in the brochure' }
];

export const infrastructure = ['CNC turret machines','Laser machines','Press brakes','Hydraulic shearing machines','MIG welding machines','Hydraulic bus-bar bending machine','3-ton EOT crane for dispatch'];
