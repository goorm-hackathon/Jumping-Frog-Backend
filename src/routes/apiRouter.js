import { Router } from 'express';
import {
  subscriberRouter,
} from './api/subscriberRouter.js';
import {
  jobRouter,
} from './api/jobRouter.js';

const apiRouter = Router();
apiRouter.use('/jobs', jobRouter);
apiRouter.use('/subscribe', subscriberRouter);

export { apiRouter };