"use client";

import {
  NAVIGATE_SECTION_EVENT,
  type NavigateSectionEventDetail,
  SMOOTH_SCROLL_END,
  SMOOTH_SCROLL_START,
  isNavSectionId,
} from "@/lib/nav-sections";
import { useEffect } from "react";

/** Misma altura que la navbar fija (`h-16`). */
const NAV_OFFSET_PX = 64;
/** Scroll suave y corto (~0,28 s). */
const DURATION_MS = 280;

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

function scrollToY(targetY: number) {
  const notifyStart = () =>
    window.dispatchEvent(new Event(SMOOTH_SCROLL_START));
  const notifyEnd = () => window.dispatchEvent(new Event(SMOOTH_SCROLL_END));

  const start = window.scrollY;
  const delta = targetY - start;
  if (Math.abs(delta) < 1) {
    window.scrollTo(0, targetY);
    return;
  }
  notifyStart();
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.scrollTo(0, targetY);
    notifyEnd();
    return;
  }
  const t0 = performance.now();
  const step = (now: number) => {
    const t = Math.min(1, (now - t0) / DURATION_MS);
    window.scrollTo(0, start + delta * easeOutCubic(t));
    if (t < 1) {
      requestAnimationFrame(step);
    } else {
      notifyEnd();
    }
  };
  requestAnimationFrame(step);
}

function getScrollTargetY(el: HTMLElement) {
  const y = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET_PX;
  return Math.max(0, y);
}

export function SmoothAnchorScroll() {
  useEffect(() => {
    const runFromHash = () => {
      const hash = window.location.hash;
      if (!hash || hash.length <= 1) {
        window.dispatchEvent(
          new CustomEvent<NavigateSectionEventDetail>(NAVIGATE_SECTION_EVENT, {
            detail: { id: "hero" },
          }),
        );
        return;
      }
      const id = decodeURIComponent(hash.slice(1));
      const el = document.getElementById(id);
      if (!el) return;
      if (isNavSectionId(id)) {
        window.dispatchEvent(
          new CustomEvent<NavigateSectionEventDetail>(NAVIGATE_SECTION_EVENT, {
            detail: { id },
          }),
        );
      }
      requestAnimationFrame(() => {
        scrollToY(getScrollTargetY(el));
      });
    };

    const onClick = (e: MouseEvent) => {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
        return;
      }
      const link = (e.target as HTMLElement).closest("a");
      if (!link) return;
      const href = link.getAttribute("href");
      if (!href || !href.startsWith("#") || href === "#") return;
      const id = decodeURIComponent(href.slice(1));
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      if (isNavSectionId(id)) {
        window.dispatchEvent(
          new CustomEvent<NavigateSectionEventDetail>(NAVIGATE_SECTION_EVENT, {
            detail: { id },
          }),
        );
      }
      const targetY = getScrollTargetY(el);
      scrollToY(targetY);
      history.replaceState(null, "", href);
    };

    document.addEventListener("click", onClick);
    window.addEventListener("hashchange", runFromHash);
    runFromHash();

    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("hashchange", runFromHash);
    };
  }, []);

  return null;
}
