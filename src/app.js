import express from 'express';
import cors from 'cors';
import { apiRouter } from './routes/apiRouter.js';
import { jobService } from './services/jobService.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { job } from './utils/schedule.js';

const app = express();


// jobService.insertJobs();
job.job();
const corsOptions = {
    origin : '*',
    credentials:true,
	optionSuccessStatus:200
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.use('/api', apiRouter);

// catch 404 and forward to error handler

// error handler
app.use(errorHandler);

export { app };
