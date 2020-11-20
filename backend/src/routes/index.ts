import express from 'express';

import usersRouter from './users.routes';

const routes = express();

routes.use('/users', usersRouter);

export default routes;
