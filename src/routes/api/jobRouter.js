import { Router } from 'express';
import { jobService } from '../../services/jobService.js';
const jobRouter = Router();

jobRouter.get('/', async (req, res, next) => {
    try {
        const result = await jobService.findAllJobs();
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
    
})

export { jobRouter }