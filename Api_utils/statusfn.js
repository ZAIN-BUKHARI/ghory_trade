const { addMonths, format } = require("date-fns");
const nodemailer = require("nodemailer");


//current DD/MM/YYY
const join = new Date();
const yyy = join.getFullYear();
let mmm = join.getMonth() + 1; // Months start at 0!
let ddd = join.getDate();
if (ddd < 10) ddd = "0" + ddd;
if (mmm < 10) mmm = "0" + mmm;
export const joinDate = ddd + "/" + mmm + "/" + yyy;
//next year DD/MM/YY
const end = new Date();
const yyyy = end.getFullYear() + 1;
let mmmm = end.getMonth() + 1; // Months start at 0!
let dddd = end.getDate();
if (dddd < 10) dddd = "0" + dddd;
if (mmmm < 10) mmmm = "0" + mmmm;
export const endDate = dddd + "/" + mmmm + "/" + yyyy;
//time formula program

function generateOneYearSalaryPlan(todayDate) {
    const salaryPlan = [];
    let currentDate = new Date(todayDate);
    const endDate = addMonths(currentDate, 12);

    while (currentDate <= endDate) {
      salaryPlan.push(format(currentDate, "dd/MM/yyyy"));
      currentDate = addMonths(currentDate, 1);
    }

    return salaryPlan;
  }
  function parseCustomDateFormat(customDate) {
    const [day, month, year] = customDate.split("/");
    return new Date(year, month - 1, day); // Note: Months are 0-based
  }

  const todayDate = parseCustomDateFormat(joinDate); // Note: Months are 0-based (8 represents September)
  export const oneYearSalaryPlan = generateOneYearSalaryPlan(todayDate);

export async function emailSendToUser(email,name)
{

  //    let from = usman bhai ka account
  let transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    service: "Gmail",
    auth: {
      user: `${process.env.NODE_MAILER_USER}`,
      pass: `${process.env.NODE_MAILER_PASS}`,
    },
    secure: true,
  });
  let mailOptions = {
    from: `${process.env.NODE_MAILER_USER}`,
    to: `${email}`,
    subject: "UG-TRADING",
    text: `Dear sir ${name},
                
                We're excited to share the wonderful news that your subscription plan has been successfully activated on your account at ghory.trade. Welcome to a
                new world of possibilities!
                
                With your active subscription, you now have access to all the premium features and benefits that come with your chosen plan.
                
                Thank you for choosing ug-trading.services as your subscription provider. We're committed to delivering exceptional value and service throughout your
                subscription journey.
                
                
                Here's to a fantastic experience ahead!
                Best regards,
                `,
  };
  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        reject(error);
      } else {
        resolve(success);
      }
    });
  });
  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        reject(err);
      } else {
        resolve(info);
      }
    });
  });
}
   