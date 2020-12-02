import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import CreateTransactionService from '../services/CreateTransactionService';
import TransactionsRepository from '../repositories/TransactionsRepository';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const transactionsRouter = Router();

transactionsRouter.use(ensureAuthenticated);

transactionsRouter.post('/', async (request, response) => {
  const { title, value, type, category } = request.body;
  const { id } = request.user;

  const createTransaction = new CreateTransactionService();

  const transaction = await createTransaction.execute({
    title,
    value,
    type,
    category,
    user_id: id,
  });

  return response.status(200).json(transaction);
});

transactionsRouter.get('/', async (request, response) => {
  const { id: user_id } = request.user;

  const transactionsRepository = getCustomRepository(TransactionsRepository);

  const balance = await transactionsRepository.getBalance({ user_id });
  const transactions = await transactionsRepository.find({ user_id });

  return response.status(200).json({ transactions, balance });
});

export default transactionsRouter;
