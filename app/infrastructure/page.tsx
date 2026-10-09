import Image from 'next/image';
import ManufacturingTimeline from '@/components/ManufacturingTimeline';
import PageIntro from '@/components/PageIntro';
import SectionHeading from '@/components/SectionHeading';

export const metadata = { title: 'Infrastructure' };

const manufacturingStages = [
  {
    title: 'Prepare',
    description:
      'We start by planning the panel layout and preparing the drawings so the parts can be made to the required dimensions.',
  },
  {
    title: 'Cut and form',
    description:
      'Metal sheets are cut, punched and bent using our fabrication machines to create the parts needed for each enclosure.',
  },
  {
    title: 'Fabricate',
    description:
      'The cut parts are joined and welded to build the panel enclosure before it moves to surface treatment.',
  },
  {
    title: 'Surface finishing',
    description:
      'Our facility has a nine-tank powder-coating setup. Every panel goes through the required seven-tank treatment process before coating.',
  },
  {
    title: 'Assemble',
    description:
      'Once the enclosure is ready, we fit the electrical components and assemble the panel according to its design.',
  },
  {
    title: 'Inspect and test',
    description:
      'Before dispatch, we check the finished panel and carry out the required electrical tests, including high-voltage testing where applicable.',
  },
  {
    title: 'Pack and dispatch',
    description:
      'After inspection, the completed panel is packed and made ready for delivery to the customer.',
  },
];

export default function Infrastructure() {
  return (
    <>
      <PageIntro
        className="infrastructure-page-intro"
        eyebrow="INFRASTRUCTURE"
        title="Manufacturing Infrastructure"
        description="Precision machinery, engineering skills and controlled manufacturing processes for LV products."
      />

      <section className="section manufacturing-intro" aria-labelledby="manufacturing-title">
        <div className="container">
          <div className="manufacturing-intro-copy">
            <div className="eyebrow">OUR MANUFACTURING FACILITY</div>
            <h2 id="manufacturing-title">Inside A.D. Enterprises</h2>
            <p>
              Take a closer look at the manufacturing processes behind our low-voltage switchboards and LT bus ducts, from sheet-metal fabrication and surface finishing to panel assembly, inspection and dispatch.
            </p>
          </div>

          <div className="manufacturing-video-frame">
            <video
              aria-label="A.D. Enterprises manufacturing footage showing fabrication, powder coating, panel assembly and testing"
              controls
              playsInline
              preload="metadata"
              width={1920}
              height={1080}
            >
              <source src="/videos/ad-enterprises-manufacturing.mp4" type="video/mp4" />
              Your browser does not support HTML video.
            </video>
          </div>
        </div>
      </section>

      <section className="section manufacturing-process-section" aria-label="Manufacturing process stages">
        <div className="container">
          <SectionHeading
            eyebrow="FROM SHEET METAL TO SWITCHBOARD"
            title="A sequence of skilled work."
            text="The stages below follow the manufacturing work shown in our facility footage."
          />
          <ManufacturingTimeline stages={manufacturingStages} />
        </div>
      </section>

      <section className="section section-dark infrastructure-facility" aria-labelledby="dispatch-facility-title">
        <div className="container">
          <SectionHeading
            eyebrow="FACILITY"
            title="Manufacturing capability with controlled dispatch handling."
            text="The brochure notes a 3-ton EOT crane used for dispatch purposes alongside the manufacturing machinery."
          />
          <div className="image-wide">
            <Image
              src="/images/hero-busbar.png"
              alt="Colour-coded busbars inside an A.D. Enterprises electrical panel"
              fill
              sizes="(max-width: 760px) 100vw, 1180px"
            />
          </div>
        </div>
      </section>
    </>
  );
}
