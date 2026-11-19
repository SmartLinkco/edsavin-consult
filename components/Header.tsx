"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/Logo";
import { cta, footer, nav } from "@/content/site";

const menuLinks = [...nav, { href: "/enquiry", label: footer.enquiry }, { href: "/privacy", label: footer.privacy }];

export function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [openPath, setOpenPath] = useState(path);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  if (path !== openPath) {
    setOpenPath(path);
    setOpen(false);
  }

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    if (open) closeRef.current?.focus();
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="site-header">
      <div className="red-bar" aria-hidden="true" />
      <div className="wrap header-bar">
        <Logo />
        <nav className="desktop-nav" aria-label="Primary">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} aria-current={path === item.href ? "page" : undefined}>
              {item.href === "/processing" ? "Processing" : item.label}
            </Link>
          ))}
          <Link className="btn btn-red" href="/enquiry">
            {cta.enquire}
          </Link>
        </nav>
        <button
          ref={toggleRef}
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? cta.menuClose : cta.menuOpen}</span>
          <span className="burger" aria-hidden="true" />
        </button>
      </div>
      <div className="mobile-menu" id="site-menu" hidden={!open}>
        <div className="wrap">
          <button
            ref={closeRef}
            className="text-btn"
            type="button"
            onClick={() => {
              setOpen(false);
              toggleRef.current?.focus();
            }}
          >
            {cta.close}
          </button>
          <nav aria-label="Mobile">
            {menuLinks.map((item) => (
              <Link key={item.href} href={item.href} aria-current={path === item.href ? "page" : undefined}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
