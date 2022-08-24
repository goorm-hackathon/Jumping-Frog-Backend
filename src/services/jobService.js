import { jobModel } from '../db/models/job-model';

class JobService {

    constructor(jobModel) {
        this.jobModel = jobModel;
    }

    // 1. 직업 정보 입력 및 업데이트
    async insertJobs(jobs) {
        const result = await this.jobModel.insertJobs(jobs);
        return result;
    }
    // 2. 직업 정보 조회
    async findJob() {
        const result = await this.jobModel.findJob();
        return result;
    }
}

export const jobService = new JobService(jobModel);