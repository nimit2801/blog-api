import { AppDataSource } from '../database/connection.js';
import { User } from './entities/User.js';

const dataSource = await AppDataSource.initialize();
//   .then(async () => {
console.log('Inserting a new user into the database...');
const user = new User();
user.firstName = 'Timber';
user.lastName = 'Saw';
user.age = 25;
await dataSource.manager.save(user);
console.log('Saved a new user with id: ' + user.id);

console.log('Loading users from the database...');
const users = await dataSource.manager.find(User);
console.log('Loaded users: ', users);

console.log(
  'Here you can setup and run express / fastify / any other framework.'
);
//   })
//   .catch((error) => console.log(error));
