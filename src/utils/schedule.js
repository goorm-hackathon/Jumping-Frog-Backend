import schedule from 'node-schedule';
import { mailService } from './email.js';

const rule = new schedule.RecurrenceRule();
// rule.dayOfWeek = 4;
// rule.hour = 14;
// rule.minute = 2;
rule.second = 0;

export const job = schedule.scheduleJob(rule, async function sendMails (){
    mailService.main();
});