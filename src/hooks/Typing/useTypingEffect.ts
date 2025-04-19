import { useEffect, useState } from "react";
import { TypingEffectReturn } from "@interfaces";
import { useTranslation } from "react-i18next";

/**
 * Custom React hook to create a typing effect for a given text.
 * It simulates typing the text character by character, then deleting it, and repeats the process.
 *
 * @returns {TypingEffectReturn} - An object containing:
 *   - `visibleText` {string}: The current visible portion of the text.
 *   - `fullText` {string}: The full text being typed and deleted.
 */
export const useTypingEffect = (): TypingEffectReturn => {
  const [visibleText, setVisibleText] = useState<string>(""); // Holds the currently visible portion of the text.
  const [isDeleting, setIsDeleting] = useState<boolean>(false); // Tracks whether the text is being deleted.
  const { t } = useTranslation();
  /**
   * The full text to display in the typing effect.
   * @type {string}
   */
  const fullText: string = t("title");

  /**
   * Speed of typing each character in milliseconds.
   * @type {number}
   */
  const typingSpeed: number = 100;

  /**
   * Speed of deleting each character in milliseconds.
   * @type {number}
   */
  const deletingSpeed: number = 70;

  /**
   * Pause duration in milliseconds before switching between typing and deleting phases.
   * @type {number}
   */
  const pauseDuration: number = 1000;

  useEffect(() => {
    let timeout: number;

    if (!isDeleting && visibleText.length < fullText.length) {
      // Typing phase: Add the next character to the visible text.
      timeout = window.setTimeout(() => {
        setVisibleText(fullText.slice(0, visibleText.length + 1));
      }, typingSpeed);
    } else if (isDeleting && visibleText.length > 0) {
      // Deleting phase: Remove the last character from the visible text.
      timeout = window.setTimeout(() => {
        setVisibleText(fullText.slice(0, visibleText.length - 1));
      }, deletingSpeed);
    } else if (!isDeleting && visibleText.length === fullText.length) {
      // Pause after completing the typing phase.
      timeout = window.setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
    } else if (isDeleting && visibleText.length === 0) {
      // Pause after completing the deleting phase.
      timeout = window.setTimeout(() => {
        setIsDeleting(false);
      }, pauseDuration);
    }

    // Cleanup the timeout to avoid memory leaks.
    return () => window.clearTimeout(timeout);
  }, [
    visibleText,
    isDeleting,
    fullText,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  return {
    visibleText, // The current visible portion of the text.
    fullText, // The full text being typed and deleted.
  };
};
