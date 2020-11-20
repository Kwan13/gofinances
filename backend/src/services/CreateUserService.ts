import { getRepository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { hash } from 'bcryptjs';

import User from '../models/Users';
import AppError from '../errors/AppError';

interface Request {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({ name, email, password }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const mailExists = await usersRepository.findOne({ email });

    if (mailExists) {
      throw new AppError('this email already used.');
    }

    const hashedPassword = await hash(password, 8);

    const user = usersRepository.create({
      id: uuid(),
      name,
      email,
      password: hashedPassword,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
