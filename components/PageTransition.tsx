'use client';

import { useLayoutEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import HomeWelcome from '@/components/HomeWelcome';

/** Animates only the routed page content while the shared site chrome stays mounted. */
export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const previousPathname = useRef(pathname);
  const isEntering = previousPathname.current !== pathname;

  useLayoutEffect(() => {
    previousPathname.current = pathname;
  }, [pathname]);

  return (
    <>
      {pathname === '/' && <HomeWelcome />}
      <main key={pathname} className={`page-transition${isEntering ? ' is-entering' : ''}`}>
        {children}
      </main>
    </>
  );
}
