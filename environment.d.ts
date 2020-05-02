declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_ENDPOINT_URL: string;
    }
  }
}

export {};
