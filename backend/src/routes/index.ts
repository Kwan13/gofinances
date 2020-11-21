import express from 'express';

import usersRouter from './users.routes';
import transactionsRouter from './transactions.routes';

const routes = express();

routes.use('/users', usersRouter);
routes.use('/transactions', transactionsRouter);

export default routes;
