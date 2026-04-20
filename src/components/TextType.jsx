'use client';

import { useEffect, useRef, useState, createElement, useMemo, useCallback } from 'react';
import { gsap } from 'gsap';
import './TextType.css';

const TextType = ({
  text,
  as: Component = 'div',
  typingSpeed = 50,
  initialDelay = 0,
  pauseDuration = 2000,
  deletingSpeed = 30,
  loop = true,
  className = '',
  showCursor = true,
  hideCursorWhileTyping = false,
  cursorCharacter = '|',
  cursorClassName = '',
  cursorBlinkDuration = 0.5,
  textColors = [],
  variableSpeed,
  onSentenceComplete,
  startOnVisible = false,
  reverseMode = false,
  accentAfterNewlineClassName = '',
  subtitleAfterSecondNewlineClassName = '',
  ...props
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(!startOnVisible);
  const cursorRef = useRef(null);
  const containerRef = useRef(null);

  const textArray = useMemo(() => (Array.isArray(text) ? text : [text]), [text]);

  const getRandomSpeed = useCallback(() => {
    if (!variableSpeed) return typingSpeed;
    const { min, max } = variableSpeed;
    return Math.random() * (max - min) + min;
  }, [variableSpeed, typingSpeed]);

  const getCurrentTextColor = () => {
    if (textColors.length === 0) return 'inherit';
    return textColors[currentTextIndex % textColors.length];
  };

  useEffect(() => {
    if (!startOnVisible || !containerRef.current) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [startOnVisible]);

  const currentSegment = textArray[currentTextIndex];
  const processedSegment = reverseMode
    ? currentSegment.split('').reverse().join('')
    : currentSegment;

  const isThreeLineComplete =
    Boolean(subtitleAfterSecondNewlineClassName) &&
    !loop &&
    currentTextIndex === textArray.length - 1 &&
    !isDeleting &&
    currentCharIndex >= processedSegment.length &&
    displayedText === processedSegment &&
    (displayedText.match(/\n/g) || []).length >= 2;

  useEffect(() => {
    if (!showCursor || !cursorRef.current) return;
    gsap.set(cursorRef.current, { opacity: 1 });
    gsap.to(cursorRef.current, {
      opacity: 0,
      duration: cursorBlinkDuration,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut'
    });
  }, [showCursor, cursorBlinkDuration, isThreeLineComplete]);

  useEffect(() => {
    if (!isVisible) return;

    let timeout;
    const currentText = textArray[currentTextIndex];
    const processedText = reverseMode ? currentText.split('').reverse().join('') : currentText;

    const executeTypingAnimation = () => {
      if (isDeleting) {
        if (displayedText === '') {
          setIsDeleting(false);
          if (currentTextIndex === textArray.length - 1 && !loop) {
            return;
          }

          if (onSentenceComplete) {
            onSentenceComplete(textArray[currentTextIndex], currentTextIndex);
          }

          setCurrentTextIndex(prev => (prev + 1) % textArray.length);
          setCurrentCharIndex(0);
          timeout = setTimeout(() => {}, pauseDuration);
        } else {
          timeout = setTimeout(() => {
            setDisplayedText(prev => prev.slice(0, -1));
          }, deletingSpeed);
        }
      } else {
        if (currentCharIndex < processedText.length) {
          timeout = setTimeout(
            () => {
              setDisplayedText(prev => prev + processedText[currentCharIndex]);
              setCurrentCharIndex(prev => prev + 1);
            },
            variableSpeed ? getRandomSpeed() : typingSpeed
          );
        } else if (textArray.length >= 1) {
          if (!loop && currentTextIndex === textArray.length - 1) return;
          timeout = setTimeout(() => {
            setIsDeleting(true);
          }, pauseDuration);
        }
      }
    };

    if (currentCharIndex === 0 && !isDeleting && displayedText === '') {
      timeout = setTimeout(executeTypingAnimation, initialDelay);
    } else {
      executeTypingAnimation();
    }

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    currentCharIndex,
    displayedText,
    isDeleting,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    textArray,
    currentTextIndex,
    loop,
    initialDelay,
    isVisible,
    reverseMode,
    variableSpeed,
    onSentenceComplete
  ]);

  const shouldHideCursor =
    hideCursorWhileTyping &&
    (currentCharIndex < textArray[currentTextIndex].length || isDeleting);

  const lineColor = getCurrentTextColor() || 'inherit';

  const cursorSpan = (inline) => (
    <span
      ref={cursorRef}
      className={`text-type__cursor ${inline ? 'align-baseline' : ''} ${cursorClassName} ${shouldHideCursor ? 'text-type__cursor--hidden' : ''}`}
    >
      {cursorCharacter}
    </span>
  );

  const renderTypedContent = () => {
    if (!accentAfterNewlineClassName) {
      return (
        <span className="text-type__content" style={{ color: lineColor }}>
          {displayedText}
        </span>
      );
    }
    const nlFirst = displayedText.indexOf('\n');
    if (nlFirst === -1) {
      return (
        <span className="text-type__content" style={{ color: lineColor }}>
          {displayedText}
        </span>
      );
    }

    const nlSecond = displayedText.indexOf('\n', nlFirst + 1);
    if (subtitleAfterSecondNewlineClassName && nlSecond !== -1) {
      return (
        <>
          <span className="text-type__content" style={{ color: lineColor }}>
            {displayedText.slice(0, nlFirst)}
          </span>
          <br />
          <span className={`text-type__content ${accentAfterNewlineClassName}`}>
            {displayedText.slice(nlFirst + 1, nlSecond)}
            {isThreeLineComplete && showCursor ? cursorSpan(true) : null}
          </span>
          <br />
          <span
            className={`text-type__content ${subtitleAfterSecondNewlineClassName}`}
          >
            {displayedText.slice(nlSecond + 1)}
          </span>
        </>
      );
    }

    return (
      <>
        <span className="text-type__content" style={{ color: lineColor }}>
          {displayedText.slice(0, nlFirst)}
        </span>
        <br />
        <span className={`text-type__content ${accentAfterNewlineClassName}`}>
          {displayedText.slice(nlFirst + 1)}
        </span>
      </>
    );
  };

  return createElement(
    Component,
    {
      ref: containerRef,
      className: `text-type ${className}`,
      ...props
    },
    renderTypedContent(),
    showCursor && !isThreeLineComplete && cursorSpan(false)
  );
};

export default TextType;
