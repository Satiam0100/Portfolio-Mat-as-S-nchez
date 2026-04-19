import type { ComponentType } from "react";

const stroke = 1.5;

function StitchTermIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="4" y="4" width="16" height="16" rx="1.5" />
      <path d="M4 8h16" />
      {/* Prompt >_ */}
      <path d="M7 12.5l2.5 2-2.5 2" />
      <path d="M11 16.5h5.5" />
    </svg>
  );
}

function StitchStrmIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="9" y="4" width="6" height="5" rx="0.75" />
      <path d="M12 9v3M12 12h-5.5M12 12h5.5M6.5 12v4M17.5 12v4" />
      <rect x="4" y="16" width="5" height="4" rx="0.75" />
      <rect x="15" y="16" width="5" height="4" rx="0.75" />
    </svg>
  );
}

function StitchModlIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M6 8l6-3 6 3-6 3-6-3z" />
      <path d="M6 12l6-3 6 3-6 3-6-3z" />
      <path d="M6 16l6-3 6 3-6 3-6-3z" />
    </svg>
  );
}

function StitchCoreIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="8" y="8" width="8" height="8" rx="0.75" />
      <path d="M8 10.5H5M8 13.5H5M8 16.5H5" />
      <path d="M16 10.5h3M16 13.5h3M16 16.5h3" />
      <path d="M10.5 8V5M13.5 8V5M16.5 8V5" />
      <path d="M10.5 16v3M13.5 16v3M16.5 16v3" />
    </svg>
  );
}

function StitchUnitLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="8" y="8" width="8" height="8" rx="0.75" />
      <path d="M8 10.5H5M8 13.5H5M16 10.5h3M16 13.5h3" />
      <path d="M10.5 8V5M13.5 8V5M10.5 16v3M13.5 16v3" />
    </svg>
  );
}

/** Mismo estilo de trazo que TERM / STRM / … (sidebar). */
export function StitchDownloadIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

const items: ReadonlyArray<{
  label: string;
  active: boolean;
  Icon: ComponentType<{ className?: string }>;
}> = [
  { Icon: StitchTermIcon, label: "TERM", active: true },
  { Icon: StitchStrmIcon, label: "STRM", active: false },
  { Icon: StitchModlIcon, label: "MODL", active: false },
  { Icon: StitchCoreIcon, label: "CORE", active: false },
];

export function SideNav() {
  return (
    <aside className="tonal-shifts-via-black fixed top-16 bottom-0 left-0 z-40 hidden w-20 flex-col items-center border-r border-[#494847]/15 bg-[#0e0e0e] pt-6 pb-8 lg:flex">
      <div className="mb-12 flex flex-col items-center gap-2">
        <div className="flex h-10 w-10 items-center justify-center border border-outline-variant/30 bg-surface-container-high">
          <StitchUnitLogo className="h-5 w-5 text-primary" />
        </div>
        <span className="text-[10px] font-black tracking-tighter text-[#00FFC2]">
          UNIT_01
        </span>
      </div>
      <div className="flex flex-col gap-10">
        {items.map(({ Icon, label, active }) => (
          <div
            key={label}
            className={
              active
                ? "group flex w-20 cursor-pointer flex-col items-center gap-1 border-r-2 border-[#00FFC2] bg-[#00FFC2]/5 py-4 text-[#00FFC2]"
                : "group flex w-20 cursor-pointer flex-col items-center gap-1 py-4 text-white/40 transition-all hover:bg-[#201f1f] hover:text-white"
            }
          >
            <Icon className="h-6 w-6 shrink-0" />
            <span className="font-body text-[8px] uppercase tracking-widest">
              {label}
            </span>
          </div>
        ))}
      </div>
    </aside>
  );
}
