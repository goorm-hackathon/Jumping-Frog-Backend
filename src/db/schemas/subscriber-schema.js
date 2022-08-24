import { Schema } from 'mongoose';
const SubscriberSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            required: true,
        },
        gender: {
            type: String,
            required: true,
        },
        interests: [
            new Schema({
                jobCode: String
            },
            {
                _id: false,
            })
        ],
        surveyOne: {
            type: Number,
            required: true,
        },
        surveyTwo: {
            type: Number,
            required: true,
        },
        records: [
            new Schema({
                jobCode: String
            },
            {
                _id: false,
            })
        ],
    },
    {
        collection: 'subscribers',
        timestamps: true,
    },
);

export { SubscriberSchema };