import { Router } from 'express';

import user from './user';
import chat from './chat';

export default () => {
  const api = Router();

  api.use(user);
  api.use(chat);

  return api;
};
