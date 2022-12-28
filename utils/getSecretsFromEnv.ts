import dotenv from 'dotenv';

dotenv.config();

export const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD;
export const PORT = process.env.PORT;
