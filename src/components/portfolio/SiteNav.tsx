"use client";

import {
  NAVIGATE_SECTION_EVENT,
  type NavigateSectionEventDetail,
  type NavSectionId,
  NAV_SECTION_IDS,
  SMOOTH_SCROLL_END,
  SMOOTH_SCROLL_START,
  isNavSectionId,
} from "@/lib/nav-sections";
import { useCallback, useEffect, useRef, useState } from "react";

const NAV_LINKS: { id: NavSectionId; label: string }[] = [
  { id: "hero", label: "_HERO" },
  { id: "tech", label: "_TECH" },
  { id: "work", label: "_WORK" },
  { id: "cv", label: "_CV" },
];

/** Misma capa visual que el botón `_EXECUTE_PROJECTS` del hero. */
const activeLayerClass =
  "bg-primary text-on-primary shadow-[0_0_20px_rgba(170,255,220,0.4)]";

const linkBaseClass =
  "font-headline inline-flex items-center px-3 py-1.5 text-sm uppercase tracking-tighter transition-all";

const inactiveHoverClass =
  "text-white/60 hover:bg-primary hover:text-on-primary hover:shadow-[0_0_20px_rgba(170,255,220,0.4)]";

/** Offset navbar + margen para scroll spy (alineado con scroll suave). */
const SCROLL_SPY_OFFSET = 72;

function activeSectionFromScrollY(): NavSectionId {
  const y = window.scrollY + SCROLL_SPY_OFFSET;
  let current: NavSectionId = "hero";
  for (const id of NAV_SECTION_IDS) {
    const el = document.getElementById(id);
    if (!el) continue;
    if (el.offsetTop <= y) current = id;
  }
  return current;
}

function readSectionFromHash(): NavSectionId {
  const h = window.location.hash.slice(1);
  if (!h) return "hero";
  return isNavSectionId(h) ? h : "hero";
}

export function SiteNav() {
  const [active, setActive] = useState<NavSectionId>("hero");
  const smoothScrollingRef = useRef(false);
  const scrollTickingRef = useRef(false);

  const applyScrollSpy = useCallback(() => {
    if (smoothScrollingRef.current) return;
    setActive(activeSectionFromScrollY());
  }, []);

  useEffect(() => {
    setActive(readSectionFromHash());

    const onNavigate = (e: Event) => {
      const detail = (e as CustomEvent<NavigateSectionEventDetail>).detail;
      if (detail?.id && isNavSectionId(detail.id)) {
        setActive(detail.id);
      }
    };

    const onSmoothStart = () => {
      smoothScrollingRef.current = true;
    };
    const onSmoothEnd = () => {
      smoothScrollingRef.current = false;
      applyScrollSpy();
    };

    const onScroll = () => {
      if (scrollTickingRef.current) return;
      scrollTickingRef.current = true;
      requestAnimationFrame(() => {
        scrollTickingRef.current = false;
        applyScrollSpy();
      });
    };

    const onHashChange = () => {
      setActive(readSectionFromHash());
    };

    window.addEventListener(
      NAVIGATE_SECTION_EVENT,
      onNavigate as EventListener,
    );
    window.addEventListener(SMOOTH_SCROLL_START, onSmoothStart);
    window.addEventListener(SMOOTH_SCROLL_END, onSmoothEnd);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.removeEventListener(
        NAVIGATE_SECTION_EVENT,
        onNavigate as EventListener,
      );
      window.removeEventListener(SMOOTH_SCROLL_START, onSmoothStart);
      window.removeEventListener(SMOOTH_SCROLL_END, onSmoothEnd);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [applyScrollSpy]);

  return (
    <nav className="fixed top-0 z-50 flex h-16 w-full items-center justify-between border-b border-[#494847]/15 bg-[#050505]/80 px-6 backdrop-blur-xl">
      <div className="font-headline text-xl font-black tracking-tighter text-[#00FFC2]">
        ARCHITECT_OS
      </div>
      <div className="hidden gap-2 font-headline text-sm uppercase tracking-tighter md:flex md:items-center">
        {NAV_LINKS.map(({ id, label }) => {
          const isActive = active === id;
          return (
            <a
              key={id}
              aria-current={isActive ? "page" : undefined}
              className={
                isActive
                  ? `${linkBaseClass} ${activeLayerClass}`
                  : `${linkBaseClass} ${inactiveHoverClass}`
              }
              href={`#${id}`}
            >
              {label}
            </a>
          );
        })}
      </div>
      <button
        type="button"
        className="bg-[#00FFC2] px-4 py-2 font-headline text-xs font-bold uppercase text-[#00654b] transition-all hover:bg-[#00edb4]"
      >
        _CONNECT
      </button>
    </nav>
  );
}
