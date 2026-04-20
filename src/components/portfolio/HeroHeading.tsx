"use client";

import TextType from "@/components/TextType";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

export function HeroHeading() {
  const { t, i18n } = useTranslation();

  const text = useMemo(
    () => [
      `${t("hero.headingLine1")}\n${t("hero.headingLine2")}`,
      `${t("hero.headingNameLine1")}\n${t("hero.headingRole")}\n${t("hero.headingDegree")}`,
    ],
    [t, i18n.language],
  );

  return (
    <TextType
      key={i18n.language}
      as="h1"
      accentAfterNewlineClassName="text-[#00FFC2]"
      subtitleAfterSecondNewlineClassName="font-body mt-2 block max-w-full text-[clamp(0.65rem,2.2vw,1.05rem)] font-bold tracking-[0.2em] text-on-surface-variant uppercase sm:mt-3"
      className="font-headline mb-6 block max-w-full text-[clamp(2rem,10vw,7.5rem)] font-black uppercase leading-[0.95] tracking-tighter text-on-surface sm:mb-8"
      cursorBlinkDuration={0.5}
      cursorCharacter="|"
      cursorClassName="text-primary"
      deletingSpeed={28}
      initialDelay={400}
      loop={false}
      pauseDuration={4000}
      showCursor
      startOnVisible
      text={text}
      typingSpeed={42}
    />
  );
}
