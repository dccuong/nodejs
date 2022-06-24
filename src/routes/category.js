import { Router } from 'express';
import { create, get, getall, read, update } from '../controllers/category';

const router = Router();
router.put('/category:id', update);
router.post('/category', create);
router.get("/category/:id", read);
router.get("/categorys/:id", get);
router.get("/category", getall);

export default router;