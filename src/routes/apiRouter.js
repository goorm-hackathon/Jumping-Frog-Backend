import { Router } from 'express';
import {
  subscriberRouter,
} from './api/index';

const apiRouter = Router();

apiRouter.use('/subscribe', subscriberRouter);

export { apiRouter };