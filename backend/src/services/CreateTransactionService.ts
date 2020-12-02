import { getCustomRepository, getRepository } from 'typeorm';
import { v4 as uuid } from 'uuid';

import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';
import User from '../models/User';
import AppError from '../errors/AppError';

interface Request {
  title: string;
  value: number;
  type: 'income' | 'outcome';
  category: string;
  user_id: string;
}

class CreateTransactionService {
  public async execute({
    title,
    value,
    type,
    category,
    user_id,
  }: Request): Promise<Transaction> {
    const transactionsRepository = getCustomRepository(TransactionsRepository);
    const usersRepository = getRepository(User);

    // const { total } = await transactionsRepository.getBalance({ user_id });

    const userExists = await usersRepository.findOne(user_id);

    if (!userExists) {
      throw new AppError('This user does not exists.');
    }

    // if (type === 'outcome' && total < value) {
    //   throw new AppError('You do not have enough balance');
    // }

    const transaction = transactionsRepository.create({
      id: uuid(),
      title,
      type,
      category,
      value,
      user_id,
    });

    await transactionsRepository.save(transaction);

    return transaction;
  }
}

export default CreateTransactionService;
