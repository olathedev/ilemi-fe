// export function getRequiredEnvVar(name: string): string {
//     const value = process.env[name];
//     if (!value) {
//       throw new Error(`Missing required environment variable: ${name}`);
//     }
//     return value;
//   }
  
  export const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL