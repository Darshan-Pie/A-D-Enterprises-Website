'use client';

import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { company, whatsappUrl } from '@/lib/content';
import BrandLogo from '@/components/BrandLogo';

const links = [
  ['About', '/about'],
  ['Products', '/products'],
  ['Quality', '/quality'],
  ['Infrastructure', '/infrastructure'],
  ['Contact', '/contact'],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [menuMounted, setMenuMounted] = useState(false);
  const [isSmartHidden, setIsSmartHidden] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const hiddenStateRef = useRef(false);
  const openStateRef = useRef(open);
  const closeTimerRef = useRef<number | null>(null);
  openStateRef.current = open;

  const setHeaderHidden = useCallback((hidden: boolean) => {
    if (hiddenStateRef.current === hidden) return;
    hiddenStateRef.current = hidden;
    setIsSmartHidden(hidden);
  }, []);

  const closeMenu = useCallback((restoreFocus = false) => {
    if (!openStateRef.current) return;
    if (restoreFocus && navRef.current?.contains(document.activeElement)) {
      toggleRef.current?.focus();
    }
    setOpen(false);
    if (closeTimerRef.current !== null) window.clearTimeout(closeTimerRef.current);
    const closeDuration = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 230;
    if (closeDuration === 0) {
      setMenuMounted(false);
      closeTimerRef.current = null;
      return;
    }
    closeTimerRef.current = window.setTimeout(() => {
      setMenuMounted(false);
      closeTimerRef.current = null;
    }, closeDuration);
  }, []);

  const openMenu = useCallback(() => {
    if (closeTimerRef.current !== null) window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = null;
    setMenuMounted(true);
    setOpen(true);
  }, []);

  useEffect(() => () => {
    if (closeTimerRef.current !== null) window.clearTimeout(closeTimerRef.current);
  }, []);

  useEffect(() => {
    // The header is shared across App Router navigations. A clicked nav link
    // can retain focus after navigation, so always start the destination route
    // with the shared header visible.
    setHeaderHidden(false);
    if (!openStateRef.current) return;
    if (navRef.current?.contains(document.activeElement)) toggleRef.current?.focus();
    closeMenu(true);
  }, [pathname, setHeaderHidden, closeMenu]);

  useEffect(() => {
    if (!open || !window.matchMedia('(max-width: 980px)').matches) return;

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (navRef.current?.contains(target) || toggleRef.current?.contains(target)) return;
      closeMenu();
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      event.preventDefault();
      closeMenu(true);
    };

    const onPageScroll = () => closeMenu(true);

    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    window.addEventListener('scroll', onPageScroll, { passive: true });

    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('scroll', onPageScroll);
    };
  }, [open, closeMenu]);

  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 981px)');
    let previousY = window.scrollY;
    let direction = 0;
    let accumulatedDistance = 0;

    const resetDirection = () => {
      direction = 0;
      accumulatedDistance = 0;
      previousY = window.scrollY;
    };

    const onScroll = () => {
      if (!desktopQuery.matches) {
        setHeaderHidden(false);
        resetDirection();
        return;
      }

      const currentY = Math.max(0, window.scrollY);
      const delta = currentY - previousY;
      previousY = currentY;

      if (currentY <= 120) {
        setHeaderHidden(false);
        direction = 0;
        accumulatedDistance = 0;
        return;
      }

      if (Math.abs(delta) < 2) return;
      const nextDirection = Math.sign(delta);
      if (nextDirection !== direction) {
        direction = nextDirection;
        accumulatedDistance = 0;
      }
      accumulatedDistance += Math.abs(delta);
      if (accumulatedDistance < 12) return;

      if (direction > 0 && currentY > 130) setHeaderHidden(true);
      if (direction < 0) setHeaderHidden(false);
      accumulatedDistance = 0;
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!desktopQuery.matches || event.clientY > 12) return;
      setHeaderHidden(false);
      resetDirection();
    };

    const onBreakpointChange = () => {
      setHeaderHidden(false);
      if (!desktopQuery.matches && navRef.current?.contains(document.activeElement)) {
        toggleRef.current?.focus();
      }
      if (closeTimerRef.current !== null) window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
      setMenuMounted(false);
      setOpen(false);
      resetDirection();
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    desktopQuery.addEventListener('change', onBreakpointChange);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('pointermove', onPointerMove);
      desktopQuery.removeEventListener('change', onBreakpointChange);
    };
  }, [pathname, setHeaderHidden]);

  const message = 'Hello A.D. Enterprises, I would like to discuss an LV switchboard / LT bus duct requirement.';

  return (
    <>
      <div className="top-bar">
        <div className="container top-bar-inner">
          <span className="top-bar-tagline">Manufacturer of LV Switch Boards &amp; LT Bus Duct</span>
          <div className="top-bar-contacts">
            <a href="tel:+919377038505">Call Akash +91 93770 38505</a>
            <span aria-hidden="true">•</span>
            <a href="tel:+917878032927">Call Dhiren +91 78780 32927</a>
            {/* <span aria-hidden="true">•</span> */}
            {/* <a href={whatsappUrl(company.contacts[0].whatsapp, message)} target="_blank" rel="noreferrer">WhatsApp us</a> */}
          </div>
        </div>
      </div>
      <header
        className={`site-header${isSmartHidden ? ' is-smart-hidden' : ''}`}
        onPointerEnter={() => setHeaderHidden(false)}
        onFocusCapture={() => setHeaderHidden(false)}
      >
        <div className="container header-inner">
          <Link href="/" className="brand" onClick={() => closeMenu(true)} aria-label="A.D. Enterprises home">
            <span className="brand-mark-frame">
              <BrandLogo variant="mark" width={68} className="brand-mark" sizes="(max-width: 760px) 54px, 68px" priority />
            </span>
            <span className="brand-copy"><strong>A.D. ENTERPRISES</strong><small>LV SWITCHBOARDS &amp; LT BUS DUCTS</small></span>
          </Link>
          <button
            className="menu-toggle"
            type="button"
            aria-label={open ? 'Close navigation' : 'Open navigation'}
            aria-expanded={open}
            aria-controls="primary-navigation"
            ref={toggleRef}
            onClick={() => open ? closeMenu() : openMenu()}
          >
            <span /><span /><span />
          </button>
          <nav
            className={`main-nav${open ? ' open' : menuMounted ? ' closing' : ''}`}
            aria-label="Primary navigation"
            id="primary-navigation"
            ref={navRef}
          >
            {links.map(([label, href], index) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={active ? 'active' : ''}
                  aria-current={active ? 'page' : undefined}
                  style={{ animationDelay: `${index * 15}ms` }}
                  onClick={() => closeMenu(true)}
                >
                  {label}
                </Link>
              );
            })}
            <a href="/AD_ENTERPRISES.pdf" target="_blank" rel="noreferrer" style={{ animationDelay: `${links.length * 15}ms` }} onClick={() => closeMenu(true)}>Brochure</a>
            <Link className="nav-cta" href="/contact" style={{ animationDelay: `${(links.length + 1) * 15}ms` }} onClick={() => closeMenu(true)}>Request a Quote</Link>
          </nav>
        </div>
      </header>
    </>
  );
}
