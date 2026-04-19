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
import { useTranslation } from "react-i18next";
import { LanguageModal } from "./LanguageModal";

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
  const { t, i18n } = useTranslation();
  const [active, setActive] = useState<NavSectionId>("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [langModalOpen, setLangModalOpen] = useState(false);
  const smoothScrollingRef = useRef(false);
  const scrollTickingRef = useRef(false);

  const applyScrollSpy = useCallback(() => {
    if (smoothScrollingRef.current) return;
    setActive(activeSectionFromScrollY());
  }, []);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setActive(readSectionFromHash());
    });

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
      cancelAnimationFrame(id);
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

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav className="fixed top-0 z-50 flex h-16 w-full min-w-0 items-center justify-between gap-2 border-b border-[#494847]/15 bg-[#050505]/80 px-3 backdrop-blur-xl sm:gap-4 sm:px-6">
        <div className="min-w-0 shrink font-headline text-base font-black tracking-tighter text-[#00FFC2] sm:text-lg md:text-xl">
          <span className="block truncate">ARCHITECT_OS</span>
        </div>
        <div className="hidden min-w-0 flex-1 justify-center gap-1 font-headline text-xs uppercase tracking-tighter md:flex md:items-center md:gap-2 md:text-sm">
          {(
            [
              { id: "hero" as const, labelKey: "nav.hero" },
              { id: "tech" as const, labelKey: "nav.tech" },
              { id: "work" as const, labelKey: "nav.work" },
              { id: "cv" as const, labelKey: "nav.cv" },
            ] as const
          ).map(({ id, labelKey }) => {
            const label = t(labelKey);
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
        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded border border-white/10 text-[#00FFC2] transition-colors hover:bg-white/5 md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-menu"
            aria-label={
              menuOpen ? t("nav.ariaMenuOpen") : t("nav.ariaMenuClosed")
            }
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? (
              <span className="text-xl leading-none" aria-hidden>
                ×
              </span>
            ) : (
              <span className="flex flex-col gap-1.5" aria-hidden>
                <span className="block h-0.5 w-5 bg-current" />
                <span className="block h-0.5 w-5 bg-current" />
                <span className="block h-0.5 w-5 bg-current" />
              </span>
            )}
          </button>
          <button
            type="button"
            className="border border-white/10 px-2 py-2 font-headline text-[10px] font-bold uppercase text-[#00FFC2] transition-colors hover:bg-white/5 sm:px-3 sm:text-xs"
            aria-expanded={langModalOpen}
            aria-haspopup="dialog"
            aria-controls="language-modal"
            onClick={() => setLangModalOpen(true)}
          >
            {i18n.language.startsWith("es") ? "_ES" : "_EN"}
          </button>
          <button
            type="button"
            className="bg-[#00FFC2] px-2 py-2 font-headline text-[10px] font-bold uppercase text-[#00654b] transition-all hover:bg-[#00edb4] sm:px-4 sm:text-xs"
          >
            {t("nav.connect")}
          </button>
        </div>
      </nav>

      <LanguageModal
        open={langModalOpen}
        onClose={() => setLangModalOpen(false)}
      />

      <div
        className={`fixed inset-x-0 top-16 z-[60] max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-[#494847]/15 bg-[#050505]/98 backdrop-blur-xl md:hidden ${
          menuOpen ? "flex" : "hidden"
        }`}
        id="mobile-nav-menu"
        role="navigation"
        aria-hidden={!menuOpen}
      >
        <div className="flex w-full flex-col gap-1 p-3 font-headline text-sm uppercase tracking-tighter">
          {(
            [
              { id: "hero" as const, labelKey: "nav.hero" },
              { id: "tech" as const, labelKey: "nav.tech" },
              { id: "work" as const, labelKey: "nav.work" },
              { id: "cv" as const, labelKey: "nav.cv" },
            ] as const
          ).map(({ id, labelKey }) => {
            const label = t(labelKey);
            const isActive = active === id;
            return (
              <a
                key={id}
                aria-current={isActive ? "page" : undefined}
                className={
                  isActive
                    ? `${linkBaseClass} justify-center py-3 ${activeLayerClass}`
                    : `${linkBaseClass} justify-center py-3 ${inactiveHoverClass}`
                }
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            );
          })}
        </div>
      </div>

      {menuOpen ? (
        <button
          type="button"
          className="fixed inset-0 top-16 z-[55] bg-black/50 md:hidden"
          aria-label={t("nav.ariaMenuBackdrop")}
          tabIndex={-1}
          onClick={() => setMenuOpen(false)}
        />
      ) : null}
    </>
  );
}
