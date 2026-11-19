import type { ReactNode } from "react";
import { Photo } from "@/components/Photo";
import { COMPANY } from "@/content/site";
import type { Photo as PhotoType } from "@/content/site";

export function PageHero({
  title,
  lede,
  photo,
  children,
}: {
  title: string;
  lede: ReactNode;
  photo?: PhotoType;
  children?: ReactNode;
}) {
  return (
    <header className="page-hero">
      <div className="wrap">
        <p className="kicker">{COMPANY}</p>
        <h1>{title}</h1>
        <div className="lede">{lede}</div>
        {children}
      </div>
      {photo ? (
        <div className="page-hero-media">
          <Photo src={photo.src} alt={photo.alt} wide={photo.wide} sizes="100vw" priority />
        </div>
      ) : null}
    </header>
  );
}
