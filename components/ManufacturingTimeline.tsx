'use client';

import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';

export type ManufacturingStage = {
  title: string;
  description: string;
};

export default function ManufacturingTimeline({ stages }: { stages: ManufacturingStage[] }) {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [revealedStages, setRevealedStages] = useState<Set<number>>(() => new Set());
  const [activeIndex, setActiveIndex] = useState(0);
  const progress = stages.length > 1 ? (activeIndex / (stages.length - 1)) * 100 : 100;

  useEffect(() => {
    const timeline = timelineRef.current;

    if (
      !timeline ||
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    let enhanced = false;
    let previousScrollY = window.scrollY;

    const observer = new IntersectionObserver((entries) => {
      const newlyRevealed: number[] = [];
      const intersectingEntries: IntersectionObserverEntry[] = [];
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY >= previousScrollY;
      previousScrollY = currentScrollY;

      for (const entry of entries) {
        const stageIndex = Number((entry.target as HTMLElement).dataset.stageIndex);
        if (!Number.isFinite(stageIndex)) continue;

        if (entry.isIntersecting) {
          intersectingEntries.push(entry);
          newlyRevealed.push(stageIndex);
        }
      }

      if (!enhanced) {
        timeline.dataset.enhanced = 'true';
        enhanced = true;
      }

      if (newlyRevealed.length) {
        setRevealedStages((current) => {
          const next = new Set(current);
          newlyRevealed.forEach((index) => next.add(index));
          return next;
        });
      }

      if (intersectingEntries.length) {
        const indices = intersectingEntries.map((entry) =>
          Number((entry.target as HTMLElement).dataset.stageIndex),
        ).filter(Number.isFinite);
        const activeStage = scrollingDown ? Math.max(...indices) : Math.min(...indices);
        if (Number.isFinite(activeStage)) setActiveIndex(activeStage);
      }
    }, {
      threshold: 0.01,
      rootMargin: '-45% 0px -35% 0px',
    });

    const stageElements = Array.from(timeline.querySelectorAll<HTMLElement>('[data-stage-index]'));
    stageElements.forEach((stage) => observer.observe(stage));

    return () => {
      observer.disconnect();
      delete timeline.dataset.enhanced;
    };
  }, []);

  return (
    <div
      className="manufacturing-timeline"
      ref={timelineRef}
      style={{ '--timeline-progress': `${progress}%` } as CSSProperties}
    >
      <span className="manufacturing-timeline-track" aria-hidden="true">
        <span className="manufacturing-timeline-progress" />
      </span>
      <ol className="manufacturing-process">
        {stages.map((stage, index) => {
          const isActive = activeIndex === index;
          const isRevealed = revealedStages.has(index);

          return (
            <li
              className={[
                'manufacturing-process-step',
                isActive ? 'is-active' : '',
                isRevealed ? 'is-revealed' : '',
              ].filter(Boolean).join(' ')}
              data-stage-index={index}
              data-side={index % 2 === 0 ? 'left' : 'right'}
              aria-current={isActive ? 'step' : undefined}
              key={stage.title}
            >
              <span className="manufacturing-process-number" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3>{stage.title}</h3>
              <p>{stage.description}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
