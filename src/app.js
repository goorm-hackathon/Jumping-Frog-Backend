import express from 'express';
import cors from 'cors';
import { apiRouter } from './routes/apiRouter.js';
import { jobService } from './services/jobService.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { job } from './utils/schedule.js';

const app = express();

job.job();
// jobService.insertJobs();

const corsOptions = {
    origin : '*'
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', apiRouter);

// catch 404 and forward to error handler

// error handler
app.use(errorHandler);

export { app };
