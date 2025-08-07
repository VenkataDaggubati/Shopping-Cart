import * as dotenv from 'dotenv';
import path from 'path';

// Load .env file from the root directory
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

// Utility to throw if env var is missing
function getEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

// Export a structured config object
export const ENV_CONFIG = {
  shoppingcart: {
    shoppingcartUrl: getEnv('SHOPPINGCART_URL'),
  },
  credentials: {
    username: getEnv('USERNAME'),
    password: getEnv('PASSWORD'),
  },
};