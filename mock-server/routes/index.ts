import express from 'express';
import pledgesRouter from './pledges';
import productCodeRouter from './productCode';
import customersRouter from './user';
const router = express.Router();

router.use('/customers',customersRouter)
router.use('/products',productCodeRouter)
router.use('/pledges',pledgesRouter)
export default router;
