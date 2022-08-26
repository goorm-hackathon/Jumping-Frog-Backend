import schedule from 'node-schedule';
import { mailService } from './email.js';

const rule = new schedule.RecurrenceRule();
rule.dayOfWeek = 1;
rule.hour = 11;
rule.minute = 0;
rule.second = 0;

export const job = schedule.scheduleJob(rule, async function sendMails (){
    mailService.main();
});