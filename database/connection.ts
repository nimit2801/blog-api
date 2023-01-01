import 'reflect-metadata';
import { User } from '../src/entities/User.js';
import { DataSource } from 'typeorm';
import { POSTGRES_PASSWORD } from '../utils/getSecretsFromEnv.js';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: '127.0.0.1',
  port: 5434,
  username: 'postgres',
  password: POSTGRES_PASSWORD,
  database: 'postgres',
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
});
