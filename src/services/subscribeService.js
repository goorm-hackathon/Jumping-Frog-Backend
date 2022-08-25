import { subscriberModel } from "../db/models/subscriber-model.js";
class SubscriptionService {
    constructor(subscriberModel) {
        this.subModel  = subscriberModel;
    }

    // 1. 구독 신청
    async subscribe(subscribeInfo) {
        const result = await this.subModel.findSubscriber(email);
        // a. 이미 구독 중인 경우
        if (result) {
            const error = new Error('이미 구독중인 이메일입니다');
            error.name = 'NotAcceptable';
            throw error;
        }
        // b. 구독 중이 아닌 경우
        const newSubscriber = await this.subModel.subscribe(subscribeInfo);
        return newSubscriber;
    }

    // 2. 구독 취소
    async cancleSubscription(email) {
        const isEmailExist = await this.subModel.findSubscriber(email);
        // a. 이미 구독 중인 경우
        if (!isEmailExist) {
            const error = new Error('구독 중인 계정이 아닙니다');
            error.name = 'NotAcceptable';
            throw error;
        }
        // b. 구독 중이 아닌 경우
        const result = await this.subModel.cancleSubscription(email);
        return result;
    }
    // 3. 전체 구독자 목록 불러오기
    async getAllSubscribers(){
        const result = await this.subModel.getAllSubscribers();
        return result;
    }
}

export const subscriptionService = new SubscriptionService(subscriberModel);



