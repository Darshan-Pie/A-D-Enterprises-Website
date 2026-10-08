import type { Metadata } from 'next';
import { Space_Grotesk, Manrope } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileContactBar from '@/components/MobileContactBar';
import ScrollReveal from '@/components/ScrollReveal';
import { company } from '@/lib/content';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || company.website;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'A.D. Enterprises | LV Switchboards & LT Bus Ducts', template: '%s | A.D. Enterprises' },
  description: 'A.D. Enterprises manufactures LV switchboards and LT bus ducts, with engineered solutions tailored to customer requirements.',
  alternates: { canonical: siteUrl },
  openGraph: { title: 'A.D. Enterprises', description: company.tagline, url: siteUrl, siteName: company.name, type: 'website' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: company.name,
    url: siteUrl,
    email: company.email,
    telephone: company.phone,
    address: { '@type': 'PostalAddress', ...company.postalAddress }
  };
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${manrope.variable}`}>
      <body>
        <Header/>
        <ScrollReveal />
        <main>{children}</main>
        <Footer/>
        <MobileContactBar/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}/>
      </body>
    </html>
  );
}
