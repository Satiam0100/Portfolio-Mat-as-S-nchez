"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  return (
    <section
      className="bg-black px-4 py-16 sm:px-8 sm:py-20 md:px-20 md:py-24"
      id="work"
    >
      <h2 className="font-headline mb-10 text-3xl font-black uppercase tracking-tighter sm:mb-16 sm:text-4xl md:text-5xl">
        {t("projects.title")}
      </h2>
      <div className="grid min-w-0 grid-cols-12 gap-4 sm:gap-6">
        <div className="relative col-span-12 min-h-[min(400px,70vh)] overflow-hidden border border-outline-variant/10 bg-surface-container group sm:min-h-[400px] lg:col-span-8">
          <Image
            src={imgs.neural}
            alt={t("projects.images.neuralAlt")}
            fill
            className="object-cover opacity-40 transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 66vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="absolute bottom-0 w-full min-w-0 p-4 sm:p-6 md:p-10">
            <div className="mb-4 flex flex-wrap items-center gap-2 sm:gap-4">
              <span className="bg-primary px-3 py-1 text-[10px] font-bold tracking-widest text-on-primary uppercase">
                {t("projects.featured.badge")}
              </span>
              <span className="font-mono text-[10px] text-white/40">
                {t("projects.featured.hash")}
              </span>
            </div>
            <h3 className="font-headline mb-3 break-words text-2xl font-bold sm:mb-4 sm:text-3xl md:text-4xl">
              {t("projects.featured.title")}
            </h3>
            <p className="mb-4 max-w-xl text-xs leading-relaxed text-on-surface-variant sm:mb-6 sm:text-sm">
              {t("projects.featured.description")}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <button
                type="button"
                className="w-full bg-primary px-6 py-2 text-xs font-bold text-on-primary uppercase transition-all hover:shadow-[0_0_15px_#aaffdc] sm:w-auto"
              >
                {t("projects.featured.deploy")}
              </button>
              <button
                type="button"
                className="w-full border border-white/20 px-6 py-2 text-xs font-bold text-white uppercase transition-all hover:bg-white/10 sm:w-auto"
              >
                {t("projects.featured.repo")}
              </button>
            </div>
          </div>
        </div>

        <div className="relative col-span-12 min-h-[min(400px,70vh)] overflow-hidden border border-outline-variant/10 bg-surface-container group sm:min-h-[400px] lg:col-span-4">
          <Image
            src={imgs.crypto}
            alt={t("projects.images.cryptoAlt")}
            fill
            className="object-cover opacity-30 transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
          <div className="absolute bottom-0 min-w-0 p-4 sm:p-8">
            <h3 className="font-headline mb-2 break-words text-xl font-bold sm:text-2xl">
              {t("projects.crypto.title")}
            </h3>
            <p className="mb-6 text-xs text-on-surface-variant">
              {t("projects.crypto.description")}
            </p>
            <span className="material-symbols-outlined text-secondary">
              arrow_outward
            </span>
          </div>
        </div>

        <div className="relative col-span-12 min-h-[min(400px,70vh)] overflow-hidden border border-outline-variant/10 bg-surface-container group sm:min-h-[400px] md:col-span-6 lg:col-span-4">
          <Image
            src={imgs.void}
            alt={t("projects.images.voidAlt")}
            fill
            className="object-cover opacity-30 transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
          <div className="absolute bottom-0 min-w-0 p-4 sm:p-8">
            <h3 className="font-headline mb-2 break-words text-xl font-bold sm:text-2xl">
              {t("projects.void.title")}
            </h3>
            <p className="mb-6 text-xs text-on-surface-variant">
              {t("projects.void.description")}
            </p>
            <span className="material-symbols-outlined text-tertiary">
              arrow_outward
            </span>
          </div>
        </div>

        <div className="relative col-span-12 min-h-[min(400px,70vh)] overflow-hidden border border-outline-variant/10 bg-surface-container group sm:min-h-[400px] md:col-span-6 lg:col-span-8">
          <Image
            src={imgs.sat}
            alt={t("projects.images.satAlt")}
            fill
            className="object-cover opacity-30 transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 66vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
          <div className="absolute bottom-0 min-w-0 p-4 sm:p-8">
            <h3 className="font-headline mb-2 break-words text-xl font-bold sm:text-2xl">
              {t("projects.sat.title")}
            </h3>
            <p className="mb-6 text-xs text-on-surface-variant">
              {t("projects.sat.description")}
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
