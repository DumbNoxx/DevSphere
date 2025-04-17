/// <reference types="vite/client" />
// This line includes type definitions for Vite's client-side features,
// enabling better TypeScript support for Vite-specific functionalities.

interface ImportMetaEnv {
  // Represents environment variables provided by Vite.
  // `VITE_API_SEND_MESSAGE` is a readonly string that stores the API endpoint URL.
  readonly VITE_API_SEND_MESSAGE: string;
}

interface ImportMeta {
  // Extends the ImportMeta interface to include the `env` property,
  // which provides access to the environment variables defined in ImportMetaEnv.
  readonly env: ImportMetaEnv;
}
