/**
 * Initializes and configures the i18next internationalization library for the application.
 *
 * This configuration includes:
 * - Integration with React using `react-i18next`.
 * - Support for English (`en`) and Spanish (`es`) translations.
 * - Default language set to Spanish (`es`).
 * - Fallback language set to English (`en`).
 * - Disabling HTML escaping for interpolation values.
 *
 * @module i18n
 */

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en, es } from "@locale";

/**
 * Initializes the i18next instance with the specified configuration.
 *
 * @see {@link https://www.i18next.com/} for more details on i18next.
 * @see {@link https://react.i18next.com/} for more details on react-i18next.
 */
i18n.use(initReactI18next).init({
  resources: {
    /**
     * English translations.
     * @property {object} en.translation - The English translation resources.
     */
    en: {
      translation: en,
    },
    /**
     * Spanish translations.
     * @property {object} es.translation - The Spanish translation resources.
     */
    es: {
      translation: es,
    },
  },
  /**
   * Default language for the application.
   * @default "es"
   */
  lng: "es",
  /**
   * Fallback language if the selected language is unavailable.
   * @default "en"
   */
  fallbackLng: "en",
  interpolation: {
    /**
     * Disables escaping of interpolation values to allow raw HTML.
     * @default false
     */
    escapeValue: false,
  },
});

export default i18n;
