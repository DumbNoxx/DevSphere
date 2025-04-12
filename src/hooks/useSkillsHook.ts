import { useState } from "react";
import { Skill } from "@interfaces";
import { listSkill } from "@helpers";
/**
 * Custom hook that provides a list of skills with their associated properties.
 * Each skill includes an identifier, name, image, background colors, and optionally a text color.
 *
 * @returns {Array} An array containing the list of skills.
 */

export const useSkillsHook = (): Array<Skill> => {
  /**
   * List of available skills.
   * Each object in the array represents a skill with the following properties:
   * - id: Unique identifier for the skill.
   * - nombre: Name of the skill.
   * - image: Path to the image associated with the skill.
   * - colors: CSS class for the background color on hover.
   * - textColor (optional): CSS class for the text color on hover.
   */

  const listSkills: Array<Skill> = listSkill;
  // State containing the list of skills.
  const [array] = useState(listSkills);

  // Returns the list of skills.
  return array;
};
