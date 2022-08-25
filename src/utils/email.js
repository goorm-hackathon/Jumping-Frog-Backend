import nodemailer from 'nodemailer';
import { jobService } from '../services/jobService.js';
import { subscriptionService } from '../services/subscribeService.js';

// async..await is not allowed in global scope, must use a wrapper
class Nodemailer{
    
    async main() {
        // create reusable transporter object using the default SMTP transport
    
        const account = process.env.NODEMAILER_ACCOUNT;
        const pass = process.env.NODEMAILER_PASSWORD;
    
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
              user: account, // generated ethereal user
              pass: pass, // generated ethereal password
            },
        });

        // send mail with defined transport object
        const subscriberList = await subscriptionService.getAllSubscribers();
        let receivers = ''
        for (let i = 0; i < subscriberList.length; i++) {
          receivers += subscriberList[i].email;
          if (i == subscriberList.length - 1) {
            break;
          } else {
            receivers +=  ', '
          }
        }
        let content = await jobService.findJob();
        const emailFrame = `<html><head><body><div>${content.jobName}</div>
                            <div>
                              <iframe width="420" height="315"
                              src=${content.jobVideo}
                              </iframe>
                            </div>
                            <div>${content.jobSummary}</div></body></head></html>`;
        
        let info = await transporter.sendMail({
          from: '"Jumping Frog" <jump.frog0826@gmail.com>', // sender address 
          to: receivers, //"bar@example.com, baz@example.com", // list of receivers 
          subject: "Hello ✔", // Subject line
          text: 'hello world', //`${content.jobCode}, ${content.jobName}, ${content.jobVideo}, ${content.jobSummary}`, // plain text body
          html: emailFrame, // html body
        });
        }
}


export const mailService = new Nodemailer();