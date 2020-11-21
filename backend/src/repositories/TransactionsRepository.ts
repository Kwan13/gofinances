import { EntityRepository, Repository } from 'typeorm';

import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface Request {
  user_id: string;
}

@EntityRepository(Transaction)
class TransactionsRepository extends Repository<Transaction> {
  public async getBalance({ user_id }: Request): Promise<Balance> {
    const transactions = await this.find({ user_id });

    const { income, outcome } = transactions.reduce(
      (accumulator, transaction) => {
        switch (transaction.type) {
          case 'income':
            accumulator.income += Number(transaction.value);
            break;

          case 'outcome':
            accumulator.outcome += Number(transaction.value);
            break;

          default:
            break;
        }

        return accumulator;
      },
      {
        income: 0,
        outcome: 0,
        total: 0,
      },
    );

    const total = income - outcome;

    return { income, outcome, total };
  }
}

export default TransactionsRepository;
