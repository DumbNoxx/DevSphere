import { git, bash } from "@assets";
import { Skill } from "@interfaces";

/**
 * A list of tools with their respective properties.
 *
 * @type {Skill[]} An array of skill objects.
 */
export const toolsList: Skill[] = [
  /**
   * @type {Skill}
   */
  {
    id: 0,
    name: "Git",
    image: git,
    colors: "hover:bg-orange-300",
    textColor: "hover:text-black",
  },
  /**
   * @type {Skill}
   */
  {
    id: 1,
    name: "Bash",
    image: bash,
    colors: "hover:bg-slate-500",
  },
];
