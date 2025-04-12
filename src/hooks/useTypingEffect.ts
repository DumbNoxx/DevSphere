import { useEffect, useState } from "react";

/**
 * Custom hook to create a typing effect for a given text.
 * It types out the text character by character, then deletes it, and repeats the process.
 *
 * @returns {Object} - An object containing:
 *   - `visibleText`: The current visible portion of the text.
 *   - `fullText`: The full text being typed and deleted.
 */
export const useTypingEffect = () => {
  const [visibleText, setVisibleText] = useState<string>(""); // Holds the currently visible portion of the text.
  const [isDeleting, setIsDeleting] = useState<boolean>(false); // Tracks whether the text is being deleted.
  const fullText: string = "Hola, soy Dylan"; // The full text to display.
  const typingSpeed: number = 100; // Speed of typing in milliseconds.
  const deletingSpeed: number = 70; // Speed of deleting in milliseconds.
  const pauseDuration: number = 1000; // Pause duration before switching between typing and deleting.

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
