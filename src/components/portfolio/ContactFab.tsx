export function ContactFab() {
  return (
    <button
      type="button"
      className="fixed right-4 bottom-4 z-40 flex h-12 w-12 items-center justify-center border border-primary-container bg-primary text-on-primary shadow-[0_0_15px_rgba(170,255,220,0.4)] transition-transform hover:scale-110 sm:right-8 sm:bottom-8 sm:h-14 sm:w-14"
      aria-label="Contact"
    >
      <span className="material-symbols-outlined">mail</span>
    </button>
  );
}
