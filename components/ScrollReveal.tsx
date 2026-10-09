'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/** Adds viewport reveals to opted-in groups while leaving content visible without JS. */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal], [data-reveal-image]'));
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!targets.length || reduceMotion || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries, currentObserver) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.remove('is-reveal-pending');
        currentObserver.unobserve(entry.target);
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -36px 0px' });

    targets.forEach((target) => {
      if (target.getBoundingClientRect().top > window.innerHeight * 0.92) {
        target.classList.add('is-reveal-pending');
      }
      observer.observe(target);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
