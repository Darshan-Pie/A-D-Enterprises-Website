'use client';

import { useEffect, useRef, useState } from 'react';
import BrandLogo from '@/components/BrandLogo';
import { company } from '@/lib/content';

const SEEN_KEY = 'ad-welcome-seen';
const EXIT_AT_MS = 2300;
const REMOVE_AT_MS = 2800;
const FAILSAFE_AT_MS = 3200;

export default function HomeWelcome() {
  const [show, setShow] = useState(false);
  const [exiting, setExiting] = useState(false);
  const startedInThisMount = useRef(false);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    let alreadySeen = false;
    try {
      alreadySeen = window.sessionStorage.getItem(SEEN_KEY) === 'true';
      if (!alreadySeen) window.sessionStorage.setItem(SEEN_KEY, 'true');
    } catch {
      // Storage may be unavailable in private browsing; the short intro still works.
    }
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Strict Mode replays mount effects in development. Keep this mount's second
    // setup eligible even though the first setup has already written the session key.
    if ((alreadySeen && !startedInThisMount.current) || reducedMotion) return;

    startedInThisMount.current = true;
    setShow(true);
    document.documentElement.classList.add('home-welcome-active');
    const exitTimer = window.setTimeout(() => {
      setExiting(true);
      document.documentElement.classList.remove('home-welcome-active');
    }, EXIT_AT_MS);
    let failsafeTimer = 0;
    const removeTimer = window.setTimeout(() => {
      setShow(false);
      window.clearTimeout(failsafeTimer);
      timers.current = [];
    }, REMOVE_AT_MS);
    failsafeTimer = window.setTimeout(() => {
      document.documentElement.classList.remove('home-welcome-active');
      setShow(false);
      timers.current = [];
    }, FAILSAFE_AT_MS);
    timers.current = [exitTimer, removeTimer, failsafeTimer];
    return () => {
      timers.current.forEach((timer) => window.clearTimeout(timer));
      timers.current = [];
      document.documentElement.classList.remove('home-welcome-active');
    };
  }, []);

  if (!show) return null;

  const skip = () => {
    timers.current.forEach((timer) => window.clearTimeout(timer));
    timers.current = [];
    document.documentElement.classList.remove('home-welcome-active');
    setShow(false);
  };

  return (
    <div className={`home-welcome${exiting ? ' is-exiting' : ''}`} role="status" aria-label="Welcome to A.D. Enterprises">
      <div className="home-welcome-content">
        <BrandLogo variant="markLight" width={280} className="home-welcome-mark" sizes="(max-width: 760px) 72vw, 280px" priority />
        <p className="home-welcome-name brand-name-text">A.D. ENTERPRISES</p>
        <p className="home-welcome-tagline">{company.tagline}</p>
        <p className="home-welcome-message">ENGINEERED POWER DISTRIBUTION</p>
        <p className="home-welcome-since">SINCE 2006</p>
        <div className="home-welcome-credentials" aria-label="Company credentials">
          <p className="home-welcome-credentials-main">
            <span>Since 2006</span><i aria-hidden="true">•</i><span>ISO 9001:2015</span><i aria-hidden="true">•</i><span>LV Switchboards</span><i aria-hidden="true">•</i><span>LT Bus Ducts</span>
          </p>
          <p className="home-welcome-credentials-detail">70 kA CPRI <span aria-hidden="true">•</span> 100 kA ERDA</p>
        </div>
      </div>
      <button className="home-welcome-skip" type="button" onClick={skip}>Skip intro</button>
      <div className="home-welcome-progress" aria-hidden="true"><span /></div>
    </div>
  );
}
