import Image from 'next/image';
import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading';
import { qualityStats } from '@/lib/content';
import PageIntro from '@/components/PageIntro';
export const metadata = { title: 'Quality & Testing' };
export default function Quality(){return <>
 <PageIntro eyebrow="QUALITY" title="Quality & Testing" description="Testing credentials and performance claims stated in the supplied company brochure." />
 <section className="section" data-reveal><div className="container"><div className="stats-grid large">{qualityStats.map(s=><div className="stat-card" key={s.value+s.label}><strong>{s.value}</strong><span>{s.label}</span><small>{s.note}</small></div>)}</div></div></section>
 <section className="section section-soft" data-reveal><div className="container split-grid"><div><SectionHeading eyebrow="TEST SCOPE" title="Short-circuit withstand, ingress protection and temperature rise." text="The brochure states a 100 kA short-circuit withstand test at ERDA according to IS 8623, a 70 kA test at CPRI Bhopal to IEC 61439, IP65 degree-of-protection testing, and temperature-rise testing to IEC 61439."/><p>These are the performance and test claims currently supported by the supplied source material. The live website should be updated with scanned certificates, report numbers and issue dates when the company provides final documents for publication.</p><Link className="button button-primary content-cta-spacing" href="/contact">Request technical documents</Link></div><div className="cert-grid"><Image src="/images/cert-erda.png" alt="Testing certificate collage from brochure" width={700} height={360}/><Image src="/images/cert-cpri.png" alt="Testing certificate collage from brochure" width={700} height={360}/></div></div></section>
 <section className="section" data-reveal><div className="container"><div className="notice"><strong>Publication note</strong><p>For an enterprise website, publish the actual certificate scans and report references provided by the company instead of relying only on brochure images.</p></div></div></section>
 </>}
