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
            host: "smtp.naver.com",
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
        /*const emailFrame = `<html><head><body><div>${content.jobName}</div>
                            <div>
                              <iframe width="420" height="315"
                              src=${content.jobVideo}
                              </iframe>
                            </div>
                            <div>${content.jobSummary}</div></body></head></html>`;*/
        
         const emailFrame =  `
            <head>
              <meta charset="UTF-8" />
              <meta http-equiv="X-UA-Compatible" content="IE=edge" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <title>Document</title>
              <style>
                .imgContainer {
                  text-align: center;
                  margin-bottom: 84px;
                }
                .logoContainer {
                  text-align: center;
                }
              
                .emailTitle {
                  text-align: center;
                  color: #f69183;
                }
                .dividerContainer {
                  text-align: center;
                  margin-top: 109px;
                  margin-bottom: 26px;
                }
                .textContainer {
                  text-align: center;
                  opacity: 50%;
                  line-height: 20px;
                }
                .videoContainer {
                  text-align: center;
                }
                .videoContainer button {
                  width: 170px;
                  height: 37px;
                  color: white;
                  background-color: #fb513b;
                  font-weight: 600;
                  border: none;
                }
                .opinionContainer {
                  text-align: center;
                }
              </style>
            </head>
              <div class="imgContainer">
                <img src="./src/utils/jump.png" alt="" />
              </div>
              <div class="logoContainer">
                <img src="./src/utils/logo.png" alt="" />
              </div>
              <div class="emailTitle">
                <p>10대 제주도를 위한 커리어 서비스</p>
                <p>성장 뉴스레터 서비스</p>
              </div>
              <div class="dividerContainer">
                <img src="./src/utils/Divider.png" alt="" />
              </div>
              <p class="textContainer">
                안녕개굴! 점프지기입니다. <br />
                저는 10대때 이런 생각을 했던 거 같아요. <br /><br />
                '나에게 꼭 맞는 직업을 찾아서 최고 전문가가 되어야지!'<br /><br />
                하지만 사회생활 N년 차가 된 아직도 내게 맞는 일을 찾고 있는 자신을
                발견합니다.<br /><br />
                '핫한' 직무는 계속 바뀌고 내 관심사도 끊임없이 변하죠.<br />
                나에게 꼭 맞는 하나의 직업도 어쩌면 없을지 몰라요.<br />
                다만 우리에게는 수많은 가능성이 있고 '<strong>가장 나다운 모습</strong>'을
                찾아<br />
                그 가능성들을 끊임없이 시험해 볼 뿐이죠.<br /><br />
                우리 개구리들이 더 큰 가능성을 향해 <strong>커리어를 확장</strong>할 수
                있도록 <br />
                오늘은 <strong>${content.jobName}</strong> 직업 인터뷰를 가져왔어요!<br /><br />
                끝까지 함께해요! ✍️
              </p>
              <div class="videoContainer">
                <a href="${content.jobVideo}"><button>영상 보러가기</button></a>
              </div>
              <div class="dividerContainer">
                <img src="./src/utils/Divider.png" alt="" />
              </div>
              <div class="opinionContainer">
                <p>오늘의 뉴스 레터는 어떠셨나요?💌</p>
                <p><strong>개구리들의 의견이 궁금해요!</strong></p>
              </div>
              <div class="videoContainer">
                <button>좋았어요 😘</button>
                <button>별로였어요 🤔</button>
              </div>`
        const emailContent = `<div class="imgContainer" style="text-align: center;margin-bottom: 84px;">
        <img src="./src/utils/jump.png" alt="">
      </div>
      <div class="logoContainer" style="text-align: center;">
        <img src="./src/utils/logo.png" alt="">
      </div>
      <div class="emailTitle" style="text-align: center;color: #f69183;">
        <p>10대 제주도를 위한 커리어 서비스</p>
        <p>성장 뉴스레터 서비스</p>
      </div>
      <div class="dividerContainer" style="text-align: center;margin-top: 109px;margin-bottom: 26px;">
        <img src="./src/utils/Divider.png" alt="">
      </div>
      <p class="textContainer" style="text-align: center;opacity: 50%;line-height: 20px;">
        안녕개굴! 점프지기입니다. <br>
        저는 10대때 이런 생각을 했던 거 같아요. <br><br>
        '나에게 꼭 맞는 직업을 찾아서 최고 전문가가 되어야지!'<br><br>
        하지만 사회생활 N년 차가 된 아직도 내게 맞는 일을 찾고 있는 자신을
        발견합니다.<br><br>
        '핫한' 직무는 계속 바뀌고 내 관심사도 끊임없이 변하죠.<br>
        나에게 꼭 맞는 하나의 직업도 어쩌면 없을지 몰라요.<br>
        다만 우리에게는 수많은 가능성이 있고 '<strong>가장 나다운 모습</strong>'을
        찾아<br>
        그 가능성들을 끊임없이 시험해 볼 뿐이죠.<br><br>
        우리 개구리들이 더 큰 가능성을 향해 <strong>커리어를 확장</strong>할 수
        있도록 <br>
        오늘은 <strong>${content.jobName}</strong> 직업 인터뷰를 가져왔어요!<br><br>
        끝까지 함께해요! ✍️
      </p>
      <div class="videoContainer" style="text-align: center;">
        <a href="${content.jobVideo}"><button style="width: 170px;height: 37px;color: white;background-color: #fb513b;font-weight: 600;border: none;">영상 보러가기</button></a>
      </div>
      <div class="dividerContainer" style="text-align: center;margin-top: 109px;margin-bottom: 26px;">
        <img src="./src/utils/Divider.png" alt="">
      </div>
      <div class="opinionContainer" style="text-align: center;">
        <p>오늘의 뉴스 레터는 어떠셨나요?💌</p>
        <p><strong>개구리들의 의견이 궁금해요!</strong></p>
      </div>
      <div class="videoContainer" style="text-align: center;">
        <button style="width: 170px;height: 37px;color: white;background-color: #fb513b;font-weight: 600;border: none;">좋았어요 😘</button>
        <button style="width: 170px;height: 37px;color: white;background-color: #fb513b;font-weight: 600;border: none;">별로였어요 🤔</button>
      </div>`
              
        let info = await transporter.sendMail({
          from: 'hyunwoo619@naver.com', // sender address 
          to: receivers, //"bar@example.com, baz@example.com", // list of receivers 
          subject: "Jump Newsletter", // Subject line
          text: 'hello world', //`${content.jobCode}, ${content.jobName}, ${content.jobVideo}, ${content.jobSummary}`, // plain text body
          html: emailContent, // html body
        });
        }
}


export const mailService = new Nodemailer();