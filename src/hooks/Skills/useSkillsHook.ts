import { useState } from "react";
import { Skill } from "@interfaces";
import { frontendList, backendList, toolsList } from "@helpers";

/**
 * Custom React hook that provides categorized lists of skills.
 *
 * @returns {Object} An object containing categorized skill lists.
 * @returns {Skill[]} frontend - List of frontend skills.
 * @returns {Skill[]} backend - List of backend skills.
 * @returns {Skill[]} tools - List of tools skills.
 */
export const useSkillsHook = () => {
  /**
   * Predefined list of frontend skills.
   * @type {Skill[]}
   */
  const frontedLists: Array<Skill> = frontendList;

  /**
   * Predefined list of backend skills.
   * @type {Skill[]}
   */
  const backendLists: Array<Skill> = backendList;

  /**
   * Predefined list of tools skills.
   * @type {Skill[]}
   */
  const toolsLists: Array<Skill> = toolsList;

  // State hook to manage the list of frontend skills.
  const [frontend]: [Skill[], React.Dispatch<React.SetStateAction<Skill[]>>] =
    useState(frontedLists);

  // State hook to manage the list of backend skills.
  const [backend]: [Skill[], React.Dispatch<React.SetStateAction<Skill[]>>] =
    useState(backendLists);

  // State hook to manage the list of tools skills.
  const [tools]: [Skill[], React.Dispatch<React.SetStateAction<Skill[]>>] =
    useState(toolsLists);

  return {
    frontend,
    backend,
    tools,
  };
};
