"use client";

import { useState } from "react";

function PauseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M8 5v14l11-7L8 5z" />
    </svg>
  );
}

export function HeroPause() {
  const [paused, setPaused] = useState(false);
  const label = paused ? "Play photos" : "Pause photos";

  return (
    <button
      type="button"
      className="pause-btn"
      aria-pressed={paused}
      aria-label={label}
      title={label}
      onClick={(event) => {
        const next = !paused;
        event.currentTarget.closest(".hero")?.classList.toggle("is-paused", next);
        setPaused(next);
      }}
    >
      {paused ? <PlayIcon /> : <PauseIcon />}
    </button>
  );
}
