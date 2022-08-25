import { Router } from 'express';
import {
  subscriberRouter,
} from './api/subscriberRouter.js';

const apiRouter = Router();

apiRouter.use('/subscribe', subscriberRouter);

export { apiRouter };