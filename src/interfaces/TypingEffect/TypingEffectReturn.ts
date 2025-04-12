/**
 * Represents the return type for a typing effect.
 * This interface defines the structure of the data returned
 * by a function or component implementing a typing effect.
 */
export interface TypingEffectReturn {
  /**
   * The portion of the text currently visible during the typing effect.
   */
  visibleText: string;

  /**
   * The complete text that is being typed out.
   */
  fullText: string;
}
