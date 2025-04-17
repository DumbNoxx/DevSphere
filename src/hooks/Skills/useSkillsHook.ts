import { useState } from "react";
import { Skill } from "@interfaces";
import { listSkill } from "@helpers";

/**
 * Custom React hook that provides a list of skills.
 *
 * This hook is designed to manage and return a predefined list of skills,
 * where each skill is represented as an object with specific properties.
 *
 * @module useSkillsHook
 *
 * @typedef {Object} Skill
 * @property {string} id - Unique identifier for the skill.
 * @property {string} nombre - Name of the skill.
 * @property {string} image - Path to the image associated with the skill.
 * @property {string} colors - CSS class for the background color on hover.
 * @property {string} [textColor] - Optional CSS class for the text color on hover.
 *
 * @returns {Skill[]} An array containing the list of skills.
 */

export const useSkillsHook = (): Array<Skill> => {
  /**
   * Predefined list of skills imported from a helper.
   * Each skill object includes properties such as id, name, image, and colors.
   */
  const listSkills: Array<Skill> = listSkill.flat();

  /**
   * State hook to manage the list of skills.
   * Although the state is not updated in this implementation, it ensures reactivity if needed in the future.
   */
  const [array] = useState(listSkills);

  /**
   * Returns the list of skills.
   */
  return array;
};
