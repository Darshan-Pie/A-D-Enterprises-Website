import { company } from '@/lib/content';
import { MapPinIcon } from '@/components/Icons';

type Props = {
  className?: string;
  subtle?: boolean;
};

export default function VisitUs({ className = '', subtle = false }: Props) {
  return (
    <section className={`visit-us-section ${subtle ? 'visit-us-section--subtle' : ''} ${className}`}>
      <div className="container">
        <div className="visit-us-container">
          <div className="visit-us-header">
            <span className="eyebrow">LOCATION</span>
            <h2>Visit A.D. Enterprises</h2>
            <p className="visit-us-tagline">
              Manufacturing facility and administrative offices located at Shyam Industrial Hub, Ahmedabad.
            </p>
          </div>

          <div className="visit-us-card">
            <div className="visit-us-pin">
              <MapPinIcon size={22} />
            </div>
            <div className="visit-us-content">
              <address className="visit-us-address">
                32, 33, 38, 39 Shyam Industrial Hub,<br />
                Kujad Gatrad Road,<br />
                Bakrol Bujrang, Daskroi,<br />
                Ahmedabad - 382433,<br />
                Gujarat, India
              </address>
              <div className="visit-us-action">
                <a
                  className="button button-primary visit-directions-btn"
                  href={company.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open A.D. Enterprises location in Google Maps"
                >
                  <MapPinIcon size={15} />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
