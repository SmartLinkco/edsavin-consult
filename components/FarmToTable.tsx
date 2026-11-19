"use client";

import { useEffect, useRef, useState } from "react";
import { Photo } from "@/components/Photo";
import { PhLabel } from "@/components/Placeholder";
import type { JourneyStep } from "@/content/site";

export function FarmToTable({ steps }: { steps: JourneyStep[] }) {
  const [active, setActive] = useState(0);
  const itemRefs = useRef<Array<HTMLLIElement | null>>([]);

  useEffect(() => {
    const nodes = itemRefs.current.filter((node): node is HTMLLIElement => node !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const index = Number((visible.target as HTMLElement).dataset.index);
        if (!Number.isNaN(index)) setActive(index);
      },
      { rootMargin: "-30% 0px -40% 0px", threshold: [0.25, 0.6] },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="journey-layout">
      <div className="journey-visual">
        {steps.map((step, index) => (
          <div key={step.id} className={index === active ? "jv is-on" : "jv"} aria-hidden={index !== active}>
            <Photo src={step.photo.src} alt={step.photo.alt} sizes="(min-width: 900px) 40vw, 100vw" />
          </div>
        ))}
      </div>
      <ol className="journey" aria-label="From cassava in the field to the buyer">
        {steps.map((step, index) => (
          <li
            key={step.id}
            ref={(node) => {
              itemRefs.current[index] = node;
            }}
            data-index={index}
            className={index === active ? "step is-active" : "step"}
            aria-current={index === active ? "step" : undefined}
          >
            <div className="step-photo">
              <Photo src={step.photo.src} alt={step.photo.alt} sizes="(min-width: 900px) 40vw, 100vw" />
            </div>
            <div>
              <p className="step-no">{step.kicker}</p>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
              <p>
                <PhLabel /> {step.note}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
