import { Subscriber } from "..";
export class SubscriberModel {
// 1. 구독 신청
    async subscribe(subscribeInfo){
        const result = Subscriber.create(subscribeInfo);
        return result;
    };
// 2. 구독 취소
    async cancelSubscription(email) {
        const result = Subscriber.findOneAndDelete({ email });
        return result;
    }
// 3. 구독 조회
    async findSubscriber(){
        const result = Subscriber.findOne({ email });
        return result;
    }
}

export const subscriberModel = new SubscriberModel();

