import Image from 'next/image';
import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading';
import ProductCard from '@/components/ProductCard';
import HomeContactCard from '@/components/HomeContactCard';
import { ArrowRightIcon, WhatsAppIcon, FileIcon } from '@/components/Icons';
import { company, products, qualityStats, whatsappUrl } from '@/lib/content';
import HomeWelcome from '@/components/HomeWelcome';

export default function Home() {
  const quoteMessage = 'Hello A.D. Enterprises, I would like to discuss an LV switchboard / LT bus duct requirement.';

  return (
    <>
      <HomeWelcome />
      {/* ──────────────────────────────────────────────
         1. HERO
      ────────────────────────────────────────────── */}
      <section className="hero">
        <Image
          className="hero-bg"
          src="/images/hero-busbar.png"
          alt="LV electrical busbar installation"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <div className="hero-kicker">ENGINEERED POWER DISTRIBUTION • SINCE 2006</div>
          <h1 className="hero-title">
            Built for demanding <span>LV power systems.</span>
          </h1>
          <p className="hero-description">
            Designing and manufacturing low-voltage switchboards and LT bus ducts tailored to customer requirements, backed by documented testing and precision manufacturing.
          </p>

          <div className="hero-actions">
            <Link className="button button-primary" href="/contact">
              Discuss Your Requirement
            </Link>
            <a
              className="button button-ghost"
              href={whatsappUrl(company.contacts[0].whatsapp, quoteMessage)}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon size={16} />
              <span>WhatsApp the Team</span>
            </a>
            <a className="button button-ghost" href="/AD_ENTERPRISES.pdf" target="_blank" rel="noreferrer">
              <FileIcon size={16} />
              <span>View Brochure</span>
            </a>
          </div>

          <div className="hero-meta">
            <span>Since 2006</span>
            <span className="hero-meta-dot">•</span>
            <span>ISO 9001:2015</span>
            <span className="hero-meta-dot">•</span>
            <span>Up to 6300 A stated rating</span>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
         2. TRUST / CERTIFICATIONS
      ────────────────────────────────────────────── */}
      <section className="trust-strip">
        <div className="container trust-grid">
          <div className="trust-item">
            <strong>70 kA</strong>
            <span>IEC 61439 / CPRI</span>
          </div>
          <div className="trust-item">
            <strong>100 kA</strong>
            <span>IS 8623 / ERDA</span>
          </div>
          <div className="trust-item">
            <strong>IP65</strong>
            <span>Degree of protection tested</span>
          </div>
          <div className="trust-item">
            <strong>Custom</strong>
            <span>Project-specific engineering</span>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
         3. ABOUT A.D. ENTERPRISES
      ────────────────────────────────────────────── */}
      <section className="section about-preview-section" data-reveal>
        <div className="container split-grid">
          <div className="about-preview-copy">
            <SectionHeading
              eyebrow="ABOUT A.D. ENTERPRISES"
              title="Engineering-led manufacturing for LV applications."
              text="A.D. Enterprises is a manufacturer of LV switchboards and bus ducts with a proven track record since 2006, supported by experienced technical professionals, designers, fabrication engineers and dedicated service personnel."
            />
            <div className="about-preview-points">
              <div className="about-point">
                <span className="about-point-number">01</span>
                <div>
                  <strong>Custom Engineering</strong>
                  <p>Panels designed specifically to your single-line diagram and application constraints.</p>
                </div>
              </div>
              <div className="about-point">
                <span className="about-point-number">02</span>
                <div>
                  <strong>In-House Fabrication</strong>
                  <p>Full manufacturing workflow from CNC sheet metal work to copper busbar processing and wiring.</p>
                </div>
              </div>
            </div>
            <Link className="text-link big-link" href="/about">
              <span>Discover our company</span>
              <ArrowRightIcon size={16} />
            </Link>
          </div>
          <div className="image-card tall" data-reveal-image>
            <Image
              src="/images/facility.png"
              alt="A.D. Enterprises manufacturing facility"
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
            />
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
         4. PRODUCTS (CAPABILITIES)
      ────────────────────────────────────────────── */}
      <section className="section section-dark products-preview-section" data-reveal>
        <div className="container">
          <SectionHeading
            eyebrow="OUR CAPABILITIES"
            title="A complete LV product range."
            text="From main power distribution and motor control to power-factor correction, generator controls, feeder pillars and LT bus ducts, our engineering covers comprehensive industrial and commercial requirements."
          />
          <div className="products-grid">
            {products.slice(0, 6).map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
          <div className="center-actions">
            <Link className="button button-light" href="/products">
              <span>View all products</span>
              <ArrowRightIcon size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
         5. ENGINEERING / MANUFACTURING CAPABILITY
      ────────────────────────────────────────────── */}
      <section className="section infrastructure-preview-section" data-reveal>
        <div className="container split-grid reverse">
          <div className="image-card" data-reveal-image>
            <Image
              src="/images/manufacturing.png"
              alt="Panel manufacturing and precision fabrication"
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="INFRASTRUCTURE"
              title="Precision manufacturing, from fabrication to dispatch."
              text="Our manufacturing infrastructure includes CNC turret punch presses, laser cutting, hydraulic press brakes, shearing machines, MIG welding, precision busbar bending, and a 3-ton EOT crane for safe assembly and dispatch."
            />
            <Link className="text-link big-link" href="/infrastructure">
              <span>Explore infrastructure</span>
              <ArrowRightIcon size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5b. HOW WE SUPPORT PROJECTS (APPROACH) */}
      <section className="section approach-section" data-reveal>
        <div className="container">
          <SectionHeading
            eyebrow="HOW WE SUPPORT PROJECTS"
            title="A technical team built around your requirement."
            text="Every switchboard project moves through a structured engineering and delivery cycle to ensure performance, compliance and timely handover."
          />
          <div className="approach-grid">
            <div className="approach-card">
              <span className="approach-step">01</span>
              <strong>Understand</strong>
              <p>Review the application single-line diagram, configuration, and project installation requirements.</p>
            </div>
            <div className="approach-card">
              <span className="approach-step">02</span>
              <strong>Engineer</strong>
              <p>Develop a tailored panel arrangement with busbar layout, component selection, and GA drawings.</p>
            </div>
            <div className="approach-card">
              <span className="approach-step">03</span>
              <strong>Manufacture</strong>
              <p>Execute fabrication, 7-tank pretreatment, powder coating, busbar processing, and wiring.</p>
            </div>
            <div className="approach-card">
              <span className="approach-step">04</span>
              <strong>Support</strong>
              <p>Deliver documented routine testing records, dispatch support, and technical service follow-through.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
         6. QUALITY & TESTING
      ────────────────────────────────────────────── */}
      <section className="section quality-preview-section" data-reveal>
        <div className="container">
          <SectionHeading
            eyebrow="QUALITY & TESTING"
            title="Tested for reliability, safety and protection."
            text="Our assemblies are backed by documented short-circuit withstand, IP65 ingress protection, and temperature-rise testing certified by premier national laboratories including ERDA and CPRI."
          />
          <div className="stats-grid">
            {qualityStats.map((s) => (
              <div className="stat-card" key={s.value + s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
                <small>{s.note}</small>
              </div>
            ))}
          </div>

          <div className="quality-banner">
            <div>
              <div className="eyebrow">DOCUMENTED TESTING</div>
              <h3>Performance evidence that belongs on your next project shortlist.</h3>
              <p>Explore our testing credentials, testing standards (IEC 61439, IS 8623), and accreditation summaries.</p>
            </div>
            <Link className="button button-primary" href="/quality">
              <span>See quality credentials</span>
              <ArrowRightIcon size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
         7. COMPANY CONTACT CARD
      ────────────────────────────────────────────── */}
      <section className="section contact-cta-section" id="direct-contact" data-reveal>
        <div className="container">
          <HomeContactCard />
        </div>
      </section>
    </>
  );
}
