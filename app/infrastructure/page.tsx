import Image from 'next/image';
import SectionHeading from '@/components/SectionHeading';
import { infrastructure } from '@/lib/content';
import PageIntro from '@/components/PageIntro';
export const metadata = { title: 'Infrastructure' };
export default function Infrastructure(){return <>
 <PageIntro eyebrow="INFRASTRUCTURE" title="Manufacturing Infrastructure" description="Precision machinery, engineering skills and controlled manufacturing processes for LV products." />
 <section className="section" data-reveal><div className="container split-grid"><div className="image-card" data-reveal-image><Image src="/images/manufacturing.png" alt="A.D. Enterprises manufacturing infrastructure" fill sizes="(max-width:900px) 100vw, 45vw"/></div><div><SectionHeading title="From sheet-metal fabrication to bus-bar processing." text="The manufacturing setup described in the brochure combines cutting, forming, welding and bus-bar processing equipment to support LV switchboard production."/><div className="equipment-list">{infrastructure.map((item,i)=><div key={item}><span>{String(i+1).padStart(2,'0')}</span><strong>{item}</strong></div>)}</div></div></div></section>
 <section className="section section-dark infrastructure-facility" data-reveal><div className="container"><SectionHeading eyebrow="FACILITY" title="Manufacturing capability with controlled dispatch handling." text="The brochure specifically notes a 3-ton EOT crane used for dispatch purposes alongside the manufacturing machinery."/><div className="image-wide" data-reveal-image><Image src="/images/hero-busbar.png" alt="Industrial electrical manufacturing detail" fill sizes="100vw"/></div></div></section>
 </>}
