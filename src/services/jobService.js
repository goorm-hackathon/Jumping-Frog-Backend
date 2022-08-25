import { jobModel } from '../db/models/job-model.js';
import * as data from '../db/data.json' assert {type: "json"};
import { job } from '../utils/schedule.js';

class JobService {

    constructor(jobModel) {
        this.jobModel = jobModel;
    }

    // 1. 직업 정보 입력 및 업데이트
    async insertJobs() {
        const jobs = data.default.data;
        for (let i = 0; i < jobs.length; i++) {
            const { jobCode, jobName, jobVideo, jobSummary } = jobs[i];
            const job = {
                jobCode, jobName, jobVideo, jobSummary, isSent: false
            }
            const result = await this.jobModel.insertJobs(jobs);
            console.log(result);
        }
    }
    // 2. 직업 정보 조회
    async findJob() {
        const result = await this.jobModel.findJob();
        return result;
    }
}

export const jobService = new JobService(jobModel);