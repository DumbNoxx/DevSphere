import { html, css, js, ts, react, tailwind } from "@assets";
import { Skill } from "@interfaces";

/**
 * Represents a list of frontend skills with their respective properties.
 * Each skill includes an ID, name, image, and styling information.
 *
 * @type {Skill[]}
 */
export const frontendList: Skill[] = [
  /**
   * HTML5 skill.
   * @type {Skill}
   */
  {
    id: 0,
    name: "HTML5",
    image: html,
    colors: "hover:bg-orange-400",
    textColor: "hover:text-black",
  },
  /**
   * CSS skill.
   * @type {Skill}
   */
  {
    id: 1,
    name: "CSS",
    image: css,
    colors: "hover:bg-sky-700",
    textColor: "hover:text-black",
  },
  /**
   * JavaScript skill.
   * @type {Skill}
   */
  {
    id: 2,
    name: "JavaScript",
    image: js,
    colors: "hover:bg-yellow-300",
    textColor: "hover:text-black",
  },
  /**
   * TypeScript skill.
   * @type {Skill}
   */
  {
    id: 3,
    name: "TypeScript",
    image: ts,
    colors: "hover:bg-cyan-950",
  },
  /**
   * React JS skill.
   * @type {Skill}
   */
  {
    id: 4,
    name: "React JS",
    image: react,
    colors: "hover:bg-sky-800",
  },
  /**
   * Tailwind CSS skill.
   * @type {Skill}
   */
  {
    id: 5,
    name: "Tailwind CSS",
    image: tailwind,
    colors: "hover:bg-emerald-300",
    textColor: "hover:text-black",
  },
];
