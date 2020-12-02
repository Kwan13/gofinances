import { Router } from 'express';

import AuthenticatedUserService from '../services/AuthenticatedUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const AuthenticatedUser = new AuthenticatedUserService();

  const session = await AuthenticatedUser.execute({ email, password });

  return response.status(200).json(session);
});

export default sessionsRouter;
