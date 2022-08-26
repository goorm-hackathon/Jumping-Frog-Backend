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
        let receivers = '';
        for (let i = 0; i < subscriberList.length; i++) {
          receivers += subscriberList[i].email;
          if (i == subscriberList.length - 1) {
            break;
          } else {
            receivers +=  ', '
          }
        }
        let content = await jobService.findJob();
        const emailContent = `
                <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>

          </head>
          <body style="width: 520px;margin: 0 auto;">
            <div class="imgContainer" style="text-align: center;margin-bottom: 84px;">
            <img src="https://ifh.cc/g/Y3wx3A.png" alt="여기">
            </div>
            <div class="logoContainer" style="text-align: center;">
            <img src="https://ifh.cc/g/b4Shda.png" alt="">
            </div>
            <div class="emailTitle" style="text-align: center;color: #f69183;">
              <p>10대 제주도를 위한 커리어 서비스</p>
              <p>성장 뉴스레터 서비스</p>
            </div>
            <div class="dividerContainer" style="margin-top: 109px;margin-bottom: 26px;">
            <img src="https://ifh.cc/g/jAC3XT.png" alt="">
            </div>
            <p class="textContainer" style="text-align: justify;opacity: 50%;line-height: 20px;">
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
              오늘은 <strong>병원 코디네이터</strong> 직업 인터뷰를 가져왔어요!<br><br>
              끝까지 함께해요! ✍️
            </p>
            <div class="dividerInterviewContainer" style="margin-bottom: 23px;">
            <img src="https://ifh.cc/g/jAC3XT.png" alt="">
            </div>
            <h2 class="interviewTitle" style="opacity: 40%;">#점프인터뷰🎤</h2>
            <div class="interviewContainer">
              <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FkC8zn%2FbtqN8ficJQp%2FxoFqyS1dcX4dcTKZYVLPD0%2Fimg.jpg" alt="">
            </div>
            <div class="videoContainer" style="text-align: center;margin-top: 31px;">
            <a href="https://youtu.be/HTKXhjMjaqQ">
            <button style="width: 170px;height: 37px;color: white;background-color: #fb513b;font-weight: 600;border: none;border-radius: 8px;">영상 보러가기</button>
            </a>
            </div>
            <div class="dividerMagContainer" style="margin-top: 33px;width: 520px;">
            <img src="https://ifh.cc/g/jAC3XT.png" alt="">
            </div>
            <h2 class="magTitle" style="opacity: 40%;">#점프돋보기🔎</h2>
            <ul class="magContent" style="text-align: justify;">
              <li style="opacity: 40%;margin-top: 12px;">
              전화, 메일 등으로 상담을 하고, 환자의 예약관리 및 사후관리를 한다. 
              </li>
              <li style="opacity: 40%;margin-top: 12px;">
              내방객의 방문목적을 확인하고, 초진의 경우 문진항목 설문지를 작성하도록 안내한다. 
              </li>
              
              <li style="opacity: 40%;margin-top: 12px;">
              진료를 마친 환자에게 치료에 대한 설명과 주의점, 처방전 등을 안내한다. 
              </li>
              <li style="opacity: 40%;margin-top: 12px;">
              환자의 추후 내방에 관한 예약관리를 하며, 수납을 담당하기도 한다. 
              </li>
              <li style="opacity: 40%;margin-top: 12px;">
              병원 분위기 연출을 위해 실내외 환경을 조성한다. 
              </li>
              <li style="opacity: 40%;margin-top: 12px;">
              병원 이미지 및 경영 개선을 위한 기획안을 작성하고 홍보·마케팅을 한다. 
              </li>
              <li style="opacity: 40%;margin-top: 12px;">
              병원 서비스 품질을 향상시키기 위한 직원 서비스 관리 및 교육을 한다.
              </li>
            </ul>
            <div class="dividerOpinionContainer" style="margin-top: 36px;">
            <img src="https://ifh.cc/g/jAC3XT.png" alt="">
            </div>
            <div class="opinionContainer" style="text-align: center;">
              <p>오늘의 뉴스 레터는 어떠셨나요?💌</p>
              <p><strong>개구리들의 의견이 궁금해요!</strong></p>
            </div>
            <div class="videoContainer" style="text-align: center;margin-top: 31px;">
              <button style="width: 170px;height: 37px;color: white;background-color: #fb513b;font-weight: 600;border: none;border-radius: 8px;text-align: center;">좋았어요 😘</button>
              <button style="width: 170px;height: 37px;color: white;background-color: #fb513b;font-weight: 600;border: none;border-radius: 8px;text-align: center;">별로였어요 🤔</button>
            </div>
          </body>
        </html>`
        const mailTemp = `
            <div class="imgContainer" style="text-align: center;margin-bottom: 84px;">
              <img src="https://ifh.cc/g/Y3wx3A.png" alt="여기">
            </div>
            <div class="logoContainer" style="text-align: center;">
              <img src="https://ifh.cc/g/b4Shda.png" alt="">
            </div>
            <div class="emailTitle" style="text-align: center;color: #f69183;">
              <p>10대 제주도를 위한 커리어 서비스</p>
              <p>성장 뉴스레터 서비스</p>
            </div>
            <div class="dividerContainer" style="margin-top: 109px;margin-bottom: 26px;">
              <img src="https://ifh.cc/g/MWSObj.png" alt="">
            </div>
            <p class="textContainer" style="text-align: justify;opacity: 50%;line-height: 20px;">
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
            <div class="dividerInterviewContainer" style="margin-bottom: 23px;">
              <img src="https://ifh.cc/g/MWSObj.png" alt="">
            </div>
            <h2 class="interviewTitle" style="opacity: 40%;">#점프인터뷰🎤</h2>
            <div class="interviewContainer">
              <img src="${content.imageUrl}" alt="">
            </div>
            <div class="videoContainer" style="text-align: center;margin-top: 31px;">
              <a href="${content.jobVideo}">
              <button style="width: 170px;height: 37px;color: white;background-color: #fb513b;font-weight: 600;border: none;border-radius: 8px;">영상 보러가기</button>
              </a>
              </div>
            <div class="dividerMagContainer" style="margin-top: 33px;">
              <img src="https://ifh.cc/g/MWSObj.png" alt="">
            </div>
            <h2 class="magTitle" style="opacity: 40%;">#점프돋보기🔎</h2>
            ${content.jobSummary.split('.').map(description => ` <li style="opacity: 40%;margin-top: 12px;">${description}</li>`)}
            <div class="dividerOpinionContainer" style="margin-top: 36px;">
              <img src="https://ifh.cc/g/MWSObj.png" alt="">
            </div>

            <div class="opinionContainer" style="text-align: center;">
              <p>오늘의 뉴스 레터는 어떠셨나요?💌</p>
              <p><strong>개구리들의 의견이 궁금해요!</strong></p>
            </div>
            <div class="videoContainer" style="text-align: center;margin-top: 31px;">
              <button style="width: 170px;height: 37px;color: white;background-color: #fb513b;font-weight: 600;border: none;border-radius: 8px;">좋았어요 😘</button>
              <button style="width: 170px;height: 37px;color: white;background-color: #fb513b;font-weight: 600;border: none;border-radius: 8px;">별로였어요 🤔</button>
            </div>
        `

        let info = await transporter.sendMail({
          from: 'hyunwoo619@naver.com', // sender address 
          to: receivers, //"bar@example.com, baz@example.com", // list of receivers 
          subject: `개굴! 오늘은 ${content.jobName} 직업을 소개합니다!📢`, // Subject line
          text: 'hello world', //`${content.jobCode}, ${content.jobName}, ${content.jobVideo}, ${content.jobSummary}`, // plain text body
          html: mailTemp, // html body
        });
        }
}


export const mailService = new Nodemailer();