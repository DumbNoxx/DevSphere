export const ENV = {
  PUBLIC: {
    API_URL: import.meta.env.VITE_API_SEND_MESSAGE as string,
  },
} as const;
