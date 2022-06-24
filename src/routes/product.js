import { Router } from 'express';
import { get, create, list, remove, update, search, list6 } from '../controllers/products';
import { userById } from '../controllers/user';
import { checkAuth, isAdmin, isAuth, requiredSigin } from '../middlewares/checkAuth';

const router = Router();

router.get('/products', list);
router.get('/products', list6);
router.post('/products', create);
router.get('/product/:id', get);
router.delete('/product/:id', remove);
router.put('/products/:id', update);
router.get('/products/search', search);

router.param('userId', userById)

export default router;