import { jobModel } from '../db/models/job-model.js';

class JobService {

    constructor(jobModel) {
        this.jobModel = jobModel;
    }

    // 1. 직업 정보 입력 및 업데이트
    async insertJobs() {
        const jobs = data.default.data;
        for (let i = 0; i < jobs.length; i++) {
            const { jobCode, jobName, jobVideo, jobSummary, imageUrl, jobLink } = jobs[i];
            const job = {
                jobCode, jobName, jobVideo, jobSummary, isSent: false, imageUrl, jobLink
            }
            const result = await this.jobModel.insertJobs(job);
            console.log(result);
        }
    }
    // 2. 직업 정보 조회
    async findJob() {
        const result = await this.jobModel.findJob();
        return result;
    }
    // 3. 직업 정보 전체 조회
    async findAllJobs(){
        const result = await this.jobModel.findAllJobs();
        return result;
    }
}

export const jobService = new JobService(jobModel);