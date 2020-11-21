import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import CreateTransactionService from '../services/CreateTransactionService';
import TransactionsRepository from '../repositories/TransactionsRepository';

const transactionsRouter = Router();

transactionsRouter.post('/', async (request, response) => {
  const { title, value, type, category, user_id } = request.body;

  const createTransaction = new CreateTransactionService();

  const transaction = await createTransaction.execute({
    title,
    value,
    type,
    category,
    user_id,
  });

  return response.status(200).json(transaction);
});

transactionsRouter.get('/', async (request, response) => {
  const user_id = '70be7fd2-78dc-48bb-92d4-e6845185ef20';

  const transactionsRepository = getCustomRepository(TransactionsRepository);

  const balance = await transactionsRepository.getBalance({ user_id });
  const transactions = await transactionsRepository.find({ user_id });

  return response.status(200).json({ transactions, balance });
});

export default transactionsRouter;
