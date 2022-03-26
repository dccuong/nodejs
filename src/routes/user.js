import { Router } from 'express';
import { login, register } from '../controllers/user';

const router = Router();

router.post('/signup', login);
router.post('/signin', register)


export default router;