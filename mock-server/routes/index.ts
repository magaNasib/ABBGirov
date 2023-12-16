import express from 'express';
import testRouter from './test';

const router = express.Router();

router.use('/example/v1/list', testRouter);

export default router;
