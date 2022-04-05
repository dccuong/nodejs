import { Router } from 'express';
import { get, create, list, remove, update } from '../controllers/products';
import { userById } from '../controllers/user';
import { checkAuth, isAdmin, isAuth, requiredSigin } from '../middlewares/checkAuth';

const router = Router();

router.get('/products', checkAuth, list);
router.post('/product', create);
router.get('/product/:id', checkAuth, get);
router.delete('/product/:id', remove);
router.put('/product/:id', update);

router.param('userId', userById)

export default router;