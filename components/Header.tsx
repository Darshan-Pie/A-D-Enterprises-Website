'use client';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { company, whatsappUrl } from '@/lib/content';
import BrandLogo from '@/components/BrandLogo';

const links = [['About','/about'],['Products','/products'],['Quality','/quality'],['Infrastructure','/infrastructure'],['Contact','/contact']];

export default function Header(){
 const [open,setOpen]=useState(false);
 const pathname=usePathname();
 const message = 'Hello A.D. Enterprises, I would like to discuss an LV switchboard / LT bus duct requirement.';
 return <>
  <div className="top-bar"><div className="container top-bar-inner"><span className="top-bar-tagline">Manufacturer of LV Switch Boards &amp; LT Bus Duct</span><div className="top-bar-contacts"><a href="tel:+919377038505">Call Akash +91 93770 38505</a><span aria-hidden="true">•</span><a href="tel:+917878032927">Call Dhiren +91 78780 32927</a><span aria-hidden="true">•</span><a href={whatsappUrl(company.contacts[0].whatsapp, message)} target="_blank" rel="noreferrer">WhatsApp us</a></div></div></div>
  <header className="site-header"><div className="container header-inner">
   <Link href="/" className="brand" onClick={()=>setOpen(false)} aria-label="A.D. Enterprises home"><span className="brand-mark-frame"><BrandLogo variant="mark" width={56} className="brand-mark" sizes="(max-width: 760px) 44px, 56px" priority/></span><span><strong>A.D. ENTERPRISES</strong><small>LV SWITCHBOARDS &amp; LT BUS DUCTS</small></span></Link>
   <button className="menu-toggle" type="button" aria-label="Toggle navigation" aria-expanded={open} onClick={()=>setOpen(v=>!v)}><span/><span/><span/></button>
   <nav className={`main-nav ${open?'open':''}`} aria-label="Primary navigation">{links.map(([label,href])=>{const active=pathname===href;return <Link key={href} href={href} className={active?'active':''} aria-current={active?'page':undefined} onClick={()=>setOpen(false)}>{label}</Link>})}<a href="/AD_ENTERPRISES.pdf" target="_blank" rel="noreferrer" onClick={()=>setOpen(false)}>Brochure</a><Link className="nav-cta" href="/contact" onClick={()=>setOpen(false)}>Request a Quote</Link></nav>
  </div></header>
 </>;
}
