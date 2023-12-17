import express from 'express';
import testRouter from './test';
import customersRouter from './user'

const router = express.Router();

router.use('/test', testRouter);
router.use('/customers',customersRouter)

export default router;
