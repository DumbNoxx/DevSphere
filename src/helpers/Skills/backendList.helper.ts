import { python, nodejs, postgreSQL, flask, fastAPI, express } from "@assets";
import { Skill } from "@interfaces";

/**
 * Represents a list of backend skills with their respective details.
 * Each skill includes an ID, name, image, and styling properties.
 *
 * @type {Skill[]}
 */
export const backendList: Skill[] = [
  /**
   * Python skill details.
   * @type {Skill}
   */
  {
    id: 0,
    name: "Python",
    image: python,
    colors: "hover:bg-yellow-300",
    textColor: "hover:text-black",
  },
  /**
   * Flask skill details.
   * @type {Skill}
   */
  {
    id: 1,
    name: "Flask",
    image: flask,
    colors: "hover:bg-gray-400",
    textColor: "hover:text-black",
  },
  /**
   * FastAPI skill details.
   * @type {Skill}
   */
  {
    id: 2,
    name: "FastAPI",
    image: fastAPI,
    colors: "hover:bg-emerald-400",
    textColor: "hover:text-black",
  },
  /**
   * Node.js skill details.
   * @type {Skill}
   */
  {
    id: 3,
    name: "Node JS",
    image: nodejs,
    colors: "hover:bg-emerald-900",
  },
  /**
   * Express.js skill details.
   * @type {Skill}
   */
  {
    id: 4,
    name: "Express JS",
    image: express,
    colors: "hover:bg-stone-600",
    textColor: "hover:text-white",
  },
  /**
   * PostgreSQL skill details.
   * @type {Skill}
   */
  {
    id: 5,
    name: "PostgreSQL",
    image: postgreSQL,
    colors: "hover:bg-slate-900",
  },
];
