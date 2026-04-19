"use client";

import TextType from "@/components/TextType";
import { useTranslation } from "react-i18next";

export function HeroHeading() {
  const { t, i18n } = useTranslation();
  const text = `${t("hero.headingLine1")}\n${t("hero.headingLine2")}`;

  return (
    <TextType
      key={i18n.language}
      as="h1"
      accentAfterNewlineClassName="text-[#00FFC2]"
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
