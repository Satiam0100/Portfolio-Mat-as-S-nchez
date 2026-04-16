export function ContactFab() {
  return (
    <button
      type="button"
      className="fixed right-8 bottom-8 z-50 flex h-14 w-14 items-center justify-center border border-primary-container bg-primary text-on-primary shadow-[0_0_15px_rgba(170,255,220,0.4)] transition-transform hover:scale-110"
      aria-label="Contact"
    >
      <span className="material-symbols-outlined">mail</span>
    </button>
  );
}
