import 'reflect-metadata';
import { User } from './entities/User';
import { DataSource } from 'typeorm';
import { POSTGRES_PASSWORD } from '../utils';
export const AppDataSource = new DataSource({
  type: 'postgres',
  host: '127.0.0.1',
  port: 5434,
  logging: true,
  username: 'postgres',
  password: POSTGRES_PASSWORD,
  entities: [User],
});

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });
