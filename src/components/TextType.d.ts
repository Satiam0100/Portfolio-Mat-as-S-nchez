import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

export interface TextTypeProps {
  text: string | string[];
  as?: ElementType;
  typingSpeed?: number;
  initialDelay?: number;
  pauseDuration?: number;
  deletingSpeed?: number;
  loop?: boolean;
  className?: string;
  showCursor?: boolean;
  hideCursorWhileTyping?: boolean;
  cursorCharacter?: string;
  cursorClassName?: string;
  cursorBlinkDuration?: number;
  textColors?: string[];
  variableSpeed?: { min: number; max: number };
  onSentenceComplete?: (sentence: string, index: number) => void;
  startOnVisible?: boolean;
  reverseMode?: boolean;
  /** Si el texto incluye `\n`, aplica esta clase a la segunda línea (p. ej. acento como el logo del nav). */
  accentAfterNewlineClassName?: string;
  children?: ReactNode;
}

declare function TextType(
  props: TextTypeProps & Omit<ComponentPropsWithoutRef<"div">, keyof TextTypeProps>,
): React.JSX.Element;

export default TextType;
