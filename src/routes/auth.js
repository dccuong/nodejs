import { Router } from 'express';
import { myin4, signin, singup, getall, update, remove } from '../controllers/auth';
const router = Router();

router.post('/signup', singup);
router.post('/signin', signin)
router.get('/user/:id', myin4);
router.get('/user', getall)
router.put('/user/:id', update)
router.delete('/user/:id', remove);

export default router;
