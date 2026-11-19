import type { ReactNode } from "react";

export function PhLabel() {
  return <span className="ph-label">[PLACEHOLDER]</span>;
}

export function PhRegion({ children }: { children: ReactNode }) {
  return (
    <div className="ph-region">
      <p className="ph-kicker">
        <PhLabel />
      </p>
      {children}
    </div>
  );
}
