const items = [
  { icon: "terminal", label: "TERM", active: true },
  { icon: "account_tree", label: "STRM", active: false },
  { icon: "layers", label: "MODL", active: false },
  { icon: "memory", label: "CORE", active: false },
] as const;

export function SideNav() {
  return (
    <aside className="tonal-shifts-via-black fixed left-0 z-40 hidden h-full w-20 flex-col items-center border-r border-[#494847]/15 bg-[#0e0e0e] py-8 lg:flex">
      <div className="mb-12 flex flex-col items-center gap-2">
        <div className="flex h-10 w-10 items-center justify-center border border-outline-variant/30 bg-surface-container-high">
          <span className="material-symbols-outlined text-primary">memory</span>
        </div>
        <span className="text-[10px] font-black tracking-tighter text-[#00FFC2]">
          UNIT_01
        </span>
      </div>
      <div className="flex flex-col gap-10">
        {items.map((item) => (
          <div
            key={item.label}
            className={
              item.active
                ? "group flex w-20 cursor-pointer flex-col items-center gap-1 border-r-2 border-[#00FFC2] bg-[#00FFC2]/5 py-4 text-[#00FFC2]"
                : "group flex w-20 cursor-pointer flex-col items-center gap-1 py-4 text-white/40 transition-all hover:bg-[#201f1f] hover:text-white"
            }
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            <span className="font-body text-[8px] uppercase tracking-widest">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </aside>
  );
}
