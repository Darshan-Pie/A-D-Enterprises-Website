import Image from 'next/image';
import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading';
import PageIntro from '@/components/PageIntro';
export const metadata = { title: 'About' };
export default function About(){return <>
 <PageIntro eyebrow="ABOUT" title="About A.D. Enterprises" description="An Ahmedabad manufacturer of LV switchboards and LT bus ducts, established in 2006." />
 <section className="section" data-reveal><div className="container split-grid"><div><SectionHeading title="Designed around the requirement." text="According to the company brochure, A.D. Enterprises specializes in designing and producing LV switchboards and bus ducts to customer-specific requirements while following engineering practices suited to demanding applications."/><p>The brochure also highlights a technical team that supports design solutions around application needs and project timelines, together with a manufacturing facility in the Bakrol Bujrang, Daskroi area of Ahmedabad.</p><Link className="button button-primary" href="/contact">Talk to the team</Link></div><div className="image-card" data-reveal-image><Image src="/images/facility.png" alt="A.D. Enterprises facility" fill sizes="(max-width:900px) 100vw, 45vw"/></div></div></section>
 <section className="section section-dark" data-reveal><div className="container two-col"><div><div className="eyebrow">WHAT THE BROCHURE EMPHASIZES</div><h2>Technical capability + manufacturing infrastructure + customer support.</h2></div><div className="feature-list"><div><strong>01</strong><span>Customer-specific design and production</span></div><div><strong>02</strong><span>Technical professionals, designers, engineers and service professionals</span></div><div><strong>03</strong><span>State-of-the-art manufacturing infrastructure</span></div><div><strong>04</strong><span>Quality-focused testing and documented performance</span></div></div></div></section>
 </>}
