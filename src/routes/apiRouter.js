import { Router } from 'express';
import {
  subscriberRouter,
} from './api';

const apiRouter = Router();

apiRouter.use('/subscribe', subscriberRouter);

export { apiRouter };