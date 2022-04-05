import { Router } from 'express';
import { create, getall, read } from '../controllers/category';

const router = Router();

router.post('/category', create);
router.get("/category/:id", read);
router.get("/category", getall);

export default router;