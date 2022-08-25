import pkg from 'mongoose';
const { Schema } = pkg; 
const JobSchema = new Schema(
    {
        jobCode: {
            type: String,
            required: true,
        },
        jobName: {
            type: String,
            required: true,
        },
        jobVideo: {
            type: String,
            required: true,
        },
        jobSummary: {
            type: String,
            required: true,
        },
        isSent: {
            type: Boolean,
            default: false,
        },
    },
    {
        collection: 'jobs',
        timestamps: true,
    },
);

export { JobSchema };