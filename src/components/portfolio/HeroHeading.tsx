"use client";

import TextType from "@/components/TextType";

export function HeroHeading() {
  return (
    <TextType
      as="h1"
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
      text={"DEV_UNIT\nOS_01"}
      typingSpeed={42}
    />
  );
}
