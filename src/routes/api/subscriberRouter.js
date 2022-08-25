import { Router } from 'express';
import { subscriptionService } from '../../services/subscribeService.js';
const subscriberRouter = Router();

// subscriber router logic

// 1. 구독 신청
// Client에서 요청으로 유저 정보를 받아옴
// Subscriber Service로 request 정보 전달
subscriberRouter.post('/subscribe', async (req, res, next) => {
    const info = req.body;
    const result = await subscriptionService.subscribe(info);
    return result;
})
// 2. 구독 취소
// Client에서 요청으로 유저 정보를 받아옴
// Subscriber Service로 request 정보 전달
subscriberRouter.delete('/cancel', async(req, res, next) => {
    const email = req.params;
    const result = await subscriptionService.cancleSubscription(email);
    return result;
})

export { subscriberRouter }