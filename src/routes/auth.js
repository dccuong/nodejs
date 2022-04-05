import { Router } from 'express';
import { myin4, signin, singup } from '../controllers/auth';

const router = Router();

router.post('/signup', singup);
router.post('/signin', signin)
router.get('/user/:id', myin4);

export default router;
