import { Job } from '..';
export class JobModel {
// 1. 직업 정보 삽입 및 업데이트
    async insertJobs(job){
        const result = await Job.create(job);
        return result;
    };
    
// 2. 직업 정보 조회
    async findJob(){
        const jobList = await Job.find({});
        const result = '';
        for(let i = 0; i < jobList.length(); i++) {
            if (jobList[i].isSent == false) {
                result = jobList[i];
                break;
            } 
        }
        await Job.findOneAndUpdate({jobCode: result.jobCode}, {isSent: true})
        return result;
    }
}

export const jobModel = new JobModel();