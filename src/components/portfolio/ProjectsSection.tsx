import Image from "next/image";

const imgs = {
  neural:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBJXMN0zYMGlp-0BSR9ugVtg_FJCMd4ON3THANNqTS3DMBhQgIOEzThjSQgmBsyrYpks9kPCS_1UrPcvCj-7OMlTiYLoGs1EDu39mGhVT-ZssyxJueRI8foXyGBSyCqpI0Iss65YpaRqIZkH9TTKsFPiCd5A87tC0ayIaTfAkWIHW8Z5Asm3lXLLgZz3pxcTX2S2DM5N7qc7Bydb0bgaqxNhdwVMdNMY-fhVSGzlmSBjVIt2gn5yfd_JgIj-7YKYTs9FRMZJ5HaOBE",
  crypto:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDajXj7V-1QNtlfvB6ULj80rJ2jj2vC3aik300764_L4ODxa-NKcHsTe1CLFhQUqrSlPTdSseFS1n_igBqiFuwevxbkeWMC_NyqdyemK27BHNjjUJPqdG8rr0dkec2owY1C5pzyKIddqwwjaYDt2paV65UhByUn_CG2wGTqrIEGt5vQE8kXZft-XOjvjjCAaqfwWBWIVYME4YX7dhuxIcfcMYsNSCV8kbMDs5AldGwgxQcH_ZpAm4RAkzDuEMMXNvteD1DOmge7Nzg",
  void:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDCz8rZEl1uhY_7QZVqLDSdm-3fO2UJEY8vnGtIdeu_Oc3IeqEys0vCapIZts5nmLNutji-ClwSfmp7uG6TKRiWr3ZfS-Q6vJjbpSwz6UxVkwgdm3yVi9V8QuMYXOstDUj8nXHPyz5b2Rhj_lwMTTdQFQXLrw0JyX8eyWeQr045qbmL3FFpNPiMWELwuh9vmCWl28nHyoNBlomwYtbMWtNAeP1KDl5IIHQqJJouhiZtnNjfcKwWHHgCkeIJvMGRD5pKjjcy-fBRC9c",
  sat: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsA414gJFS_XomBphn_MShP1J65P1m_71v0YdyMyV7FCaJbR7vp_BxZWSS95aPp2yB0z6PHE9zFGTjRINE1UW1xvURZfiJd-HWTdo5JwhgGzce_RhSxINo25fZ14Dl4NSpPWm4VElewQn8AxyXbIe3aJC8w0Xu6NVC0SCkdRdc4g2GafLiJXoRervuO-qstHZaKOU5mFxC7Z8-6zqCDEjOhIJL-IlPocP2Tt4HFfPV1UbziIHFjjgxfLm6xZ7cKJVgCvAwhhNoQjQ",
};

export function ProjectsSection() {
  return (
    <section className="bg-black px-10 py-24 md:px-20" id="work">
      <h2 className="font-headline mb-16 text-4xl font-black uppercase tracking-tighter md:text-5xl">
        _PROJECT_LOGS
      </h2>
      <div className="grid grid-cols-12 gap-6">
        <div className="relative col-span-12 min-h-[400px] overflow-hidden border border-outline-variant/10 bg-surface-container group lg:col-span-8">
          <Image
            src={imgs.neural}
            alt="Sala de servidores futurista con luces neón cian y circuitos digitales"
            fill
            className="object-cover opacity-40 transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 66vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="absolute bottom-0 w-full p-10">
            <div className="mb-4 flex items-center gap-4">
              <span className="bg-primary px-3 py-1 text-[10px] font-bold tracking-widest text-on-primary uppercase">
                CORE_MODULE
              </span>
              <span className="font-mono text-[10px] text-white/40">
                HASH: 7F0A2
              </span>
            </div>
            <h3 className="font-headline mb-4 text-4xl font-bold">
              NEURAL_NET_INTERFACE
            </h3>
            <p className="mb-6 max-w-xl text-sm leading-relaxed text-on-surface-variant">
              A real-time data visualization dashboard for tracking distributed
              AI processing units across global nodes.
            </p>
            <div className="flex gap-4">
              <button
                type="button"
                className="bg-primary px-6 py-2 text-xs font-bold text-on-primary uppercase transition-all hover:shadow-[0_0_15px_#aaffdc]"
              >
                _DEPLOY_LINK
              </button>
              <button
                type="button"
                className="border border-white/20 px-6 py-2 text-xs font-bold text-white uppercase transition-all hover:bg-white/10"
              >
                _GIT_REPO
              </button>
            </div>
          </div>
        </div>

        <div className="relative col-span-12 min-h-[400px] overflow-hidden border border-outline-variant/10 bg-surface-container group lg:col-span-4">
          <Image
            src={imgs.crypto}
            alt="Ondas de luz neón rosa y azul sobre fondo oscuro"
            fill
            className="object-cover opacity-30 transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
          <div className="absolute bottom-0 p-8">
            <h3 className="font-headline mb-2 text-2xl font-bold">
              CRYPTO_STREAM
            </h3>
            <p className="mb-6 text-xs text-on-surface-variant">
              Live transaction monitoring engine with 0.1ms latency.
            </p>
            <span className="material-symbols-outlined text-secondary">
              arrow_outward
            </span>
          </div>
        </div>

        <div className="relative col-span-12 min-h-[400px] overflow-hidden border border-outline-variant/10 bg-surface-container group md:col-span-6 lg:col-span-4">
          <Image
            src={imgs.void}
            alt="Formas geométricas cristalinas 3D con iluminación cian"
            fill
            className="object-cover opacity-30 transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
          <div className="absolute bottom-0 p-8">
            <h3 className="font-headline mb-2 text-2xl font-bold">VOID_UI_KIT</h3>
            <p className="mb-6 text-xs text-on-surface-variant">
              Open-source brutalist design system for Next.js applications.
            </p>
            <span className="material-symbols-outlined text-tertiary">
              arrow_outward
            </span>
          </div>
        </div>

        <div className="relative col-span-12 min-h-[400px] overflow-hidden border border-outline-variant/10 bg-surface-container group md:col-span-6 lg:col-span-8">
          <Image
            src={imgs.sat}
            alt="Vista satelital de la Tierra con conexiones de datos luminosas"
            fill
            className="object-cover opacity-30 transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 66vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
          <div className="absolute bottom-0 p-8">
            <h3 className="font-headline mb-2 text-2xl font-bold">
              SAT_NODE_MANAGER
            </h3>
            <p className="mb-6 text-xs text-on-surface-variant">
              Orbital telemetry processing unit with integrated Mapbox GL
              modules.
            </p>
            <span className="material-symbols-outlined text-primary">
              arrow_outward
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
