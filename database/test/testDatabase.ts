import 'reflect-metadata';
import { AppDataSource } from '../connection.js';
import { User } from '../../src/entities/User.js';

const addUser = async () => {
  let user = new User();
  user.firstName = 'Nimit';
  user.lastName = 'Savant';
  user.age = 21;
  try {
    await AppDataSource.initialize();
    const userRepository = AppDataSource.getRepository(User);
    user = await userRepository.save(user);
    console.log('User was saved: ', user.id);
  } catch (error) {
    console.error(error);
  }
};
addUser();
