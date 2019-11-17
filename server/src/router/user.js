import { Router } from 'express';
import response from '../middleware/response';
import userController from '../controllers/user';

const router = Router();

router.get('/user', response(userController.getUser));

export default router;
