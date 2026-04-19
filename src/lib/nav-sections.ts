export const NAV_SECTION_IDS = ["hero", "tech", "work", "cv"] as const;

export type NavSectionId = (typeof NAV_SECTION_IDS)[number];

export function isNavSectionId(id: string): id is NavSectionId {
  return (NAV_SECTION_IDS as readonly string[]).includes(id);
}

/** Evento emitido al navegar por ancla (scroll suave o carga con hash). */
export const NAVIGATE_SECTION_EVENT = "portfolio-navigate-section";

export type NavigateSectionEventDetail = { id: NavSectionId };

/** Scroll suave en curso (evita que el scroll spy cambie el ítem activo a mitad de la animación). */
export const SMOOTH_SCROLL_START = "portfolio-smooth-scroll-start";
export const SMOOTH_SCROLL_END = "portfolio-smooth-scroll-end";
