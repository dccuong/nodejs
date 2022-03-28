import { Router } from 'express';
import { get, create, list, remove, update } from '../controllers/products';
import { userById } from '../controllers/user';
import { checkAuth, isAdmin, isAuth, requiredSigin } from '../middlewares/checkAuth';

const router = Router();

router.get('/products', checkAuth, list);
router.post('/products:userId', requiredSigin, isAdmin, isAuth, create);
router.get('/product/:id', checkAuth, get);
router.delete('/product/:id', requiredSigin, isAuth, isAdmin, remove);
router.put('/product/:id', requiredSigin, isAuth, isAdmin, update);

router.param('userId', userById)

export default router;