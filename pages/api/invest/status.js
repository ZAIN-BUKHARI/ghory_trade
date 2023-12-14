// import { use } from 'react'
// import { resolve } from 'styled-jsx/css';
import ConnectMongoDB from "../../../middleware/mongoose";
import Plan from "../../../models/Plan";
import User from "../../../models/User";
const nodemailer = require("nodemailer");
const { addMonths, format } = require("date-fns");

const handler = async (req, res) => {
  //current DD/MM/YYY
  const join = new Date();
  const yyy = join.getFullYear();
  let mmm = join.getMonth() + 1; // Months start at 0!
  let ddd = join.getDate();
  if (ddd < 10) ddd = "0" + ddd;
  if (mmm < 10) mmm = "0" + mmm;
  const joinDate = ddd + "/" + mmm + "/" + yyy;
  //next year DD/MM/YY
  const end = new Date();
  const yyyy = end.getFullYear() + 1;
  let mmmm = end.getMonth() + 1; // Months start at 0!
  let dddd = end.getDate();
  if (dddd < 10) dddd = "0" + dddd;
  if (mmmm < 10) mmmm = "0" + mmmm;
  const endDate = dddd + "/" + mmmm + "/" + yyyy;
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
  const oneYearSalaryPlan = generateOneYearSalaryPlan(todayDate);

  let emailaddressto;

  let result = await Plan.findByIdAndUpdate(
    { _id: req.query._id },
    {
      status: req.query.status,
      date: joinDate,
      enddate: endDate,
    }
  );
  await result.save();
  emailaddressto = result.email;

  let checkUserPreviousDetails = await User.findOne({ email: result.email });

  if (result && req.query.status == "verified") {
    const percentage = (result.investment * 20) / 100;
    const perDayBalance = percentage / 30;
    if (
      checkUserPreviousDetails.planId.length==0
    ){
      await User.updateOne(
        { email: result.email },
        {
          subscription: "yes",
          totalInvestment:result.investment,
          perDayProfit: perDayBalance,
          level: 10,
          // YearPlan: [
          //   oneYearSalaryPlan[1],
          //   oneYearSalaryPlan[2],
          //   oneYearSalaryPlan[3],
          //   oneYearSalaryPlan[4],
          //   oneYearSalaryPlan[5],
          //   oneYearSalaryPlan[6],
          //   oneYearSalaryPlan[7],
          //   oneYearSalaryPlan[8],
          //   oneYearSalaryPlan[9],
          //   oneYearSalaryPlan[10],
          //   oneYearSalaryPlan[11],
          //   oneYearSalaryPlan[12],
          // ],
          $push:{ YearPlan:[{1:oneYearSalaryPlan[1],
                             2:oneYearSalaryPlan[2],
                             3:oneYearSalaryPlan[3],
                             4:oneYearSalaryPlan[4],
                             5:oneYearSalaryPlan[5],
                             6:oneYearSalaryPlan[6],
                             7:oneYearSalaryPlan[7],
                             8:oneYearSalaryPlan[8],
                             9:oneYearSalaryPlan[9],
                             10:oneYearSalaryPlan[10],
                             11:oneYearSalaryPlan[11],
                             12:oneYearSalaryPlan[12],}]},
          $inc: { planCount: 1 },
          $push: { planId: result._id.toString() },
        }
      );
    }else{
      const totalInvestment = checkUserPreviousDetails.totalInvestment
      const totalPerDayProfit = checkUserPreviousDetails.perDayProfit
      await User.updateOne(
       { email: result.email },
        {
          review:'no',
          totalInvestment:totalInvestment+result.investment,
          perDayProfit: totalPerDayProfit+perDayBalance,
          // YearPlan: [
          //   oneYearSalaryPlan[1],
          //   oneYearSalaryPlan[2],
          //   oneYearSalaryPlan[3],
          //   oneYearSalaryPlan[4],
          //   oneYearSalaryPlan[5],
          //   oneYearSalaryPlan[6],
          //   oneYearSalaryPlan[7],
          //   oneYearSalaryPlan[8],
          //   oneYearSalaryPlan[9],
          //   oneYearSalaryPlan[10],
          //   oneYearSalaryPlan[11],
          //   oneYearSalaryPlan[12],
          // ],
          $push:{ YearPlan:[oneYearSalaryPlan]},
          $inc: { planCount: 1 },
          $push: { planId: result._id.toString() },
        }
      );
    }
    let user = await User.findOne({ email: result.email });
    emailaddressto = result.email;
    try {
      if (user.invite != "") {
        let thirdDoc = await User.findOne({ _id: user.invite });

        if (thirdDoc.invite != "") {
          let Leader = await User.findOne({ _id: thirdDoc.invite });

          if (Leader.invite != "") {
            // new if
            for (let i = 0; i < Leader.teams.length; i++) {
              if (
                user._id.toString() ===
                Leader.teams[i]["indirect"].id.toString()
              ) {
                await User.findByIdAndUpdate(
                  { _id: Leader._id },
                  {
                    $set: {
                      [`teams.${i}.indirect.plan`]: "yes",
                      [`teams.${i}.indirect.investment`]: result.investment,
                      [`teams.${i}.indirect.salaryDate`]: [
                        oneYearSalaryPlan[1],
                        oneYearSalaryPlan[2],
                        oneYearSalaryPlan[3],
                        oneYearSalaryPlan[4],
                        oneYearSalaryPlan[5],
                        oneYearSalaryPlan[6],
                        oneYearSalaryPlan[7],
                        oneYearSalaryPlan[8],
                        oneYearSalaryPlan[9],
                        oneYearSalaryPlan[10],
                        oneYearSalaryPlan[11],
                        oneYearSalaryPlan[12],
                      ],
                    },
                  }
                );
              }
            }

            for (let i = 0; i < thirdDoc.teams.length; i++) {
              if (
                user._id.toString() ===
                thirdDoc.teams[i]["direct"].id.toString()
              ) {
                await User.findByIdAndUpdate(
                  { _id: thirdDoc._id },
                  {
                    $set: {
                      [`teams.${i}.direct.plan`]: "yes",
                      [`teams.${i}.direct.investment`]: result.investment,
                      [`teams.${i}.direct.salaryDate`]: [
                        oneYearSalaryPlan[1],
                        oneYearSalaryPlan[2],
                        oneYearSalaryPlan[3],
                        oneYearSalaryPlan[4],
                        oneYearSalaryPlan[5],
                        oneYearSalaryPlan[6],
                        oneYearSalaryPlan[7],
                        oneYearSalaryPlan[8],
                        oneYearSalaryPlan[9],
                        oneYearSalaryPlan[10],
                        oneYearSalaryPlan[11],
                        oneYearSalaryPlan[12],
                      ],
                    },
                  }
                );
              }
            }
          } else if (Leader.invite == "") {
            for (let i = 0; i < Leader.teams.length; i++) {
              if (
                user._id.toString() ===
                Leader.teams[i]["indirect"].id.toString()
              ) {
                await User.findByIdAndUpdate(
                  { _id: Leader._id },
                  {
                    $set: {
                      [`teams.${i}.indirect.plan`]: "yes",
                      [`teams.${i}.indirect.investment`]: result.investment,
                      [`teams.${i}.indirect.salaryDate`]: [
                        oneYearSalaryPlan[1],
                        oneYearSalaryPlan[2],
                        oneYearSalaryPlan[3],
                        oneYearSalaryPlan[4],
                        oneYearSalaryPlan[5],
                        oneYearSalaryPlan[6],
                        oneYearSalaryPlan[7],
                        oneYearSalaryPlan[8],
                        oneYearSalaryPlan[9],
                        oneYearSalaryPlan[10],
                        oneYearSalaryPlan[11],
                        oneYearSalaryPlan[12],
                      ],
                    },
                  }
                );
              }
            }

            for (let i = 0; i < thirdDoc.teams.length; i++) {
              if (
                user._id.toString() ===
                thirdDoc.teams[i]["direct"].id.toString()
              ) {
                await User.findByIdAndUpdate(
                  { _id: thirdDoc._id },
                  {
                    $set: {
                      [`teams.${i}.direct.plan`]: "yes",
                      [`teams.${i}.direct.investment`]: result.investment,
                      [`teams.${i}.direct.salaryDate`]: [
                        oneYearSalaryPlan[1],
                        oneYearSalaryPlan[2],
                        oneYearSalaryPlan[3],
                        oneYearSalaryPlan[4],
                        oneYearSalaryPlan[5],
                        oneYearSalaryPlan[6],
                        oneYearSalaryPlan[7],
                        oneYearSalaryPlan[8],
                        oneYearSalaryPlan[9],
                        oneYearSalaryPlan[10],
                        oneYearSalaryPlan[11],
                        oneYearSalaryPlan[12],
                      ],
                    },
                  }
                );
              }
            }
          }
        } else {
          for (let i = 0; i < thirdDoc.teams.length; i++) {
            if (
              user._id.toString() == thirdDoc.teams[i]["direct"].id.toString()
            ) {
              await User.findByIdAndUpdate(
                { _id: thirdDoc._id },
                {
                  $set: {
                    [`teams.${i}.direct.plan`]: "yes",
                    [`teams.${i}.direct.investment`]: result.investment,
                    [`teams.${i}.direct.salaryDate`]: [
                      oneYearSalaryPlan[1],
                      oneYearSalaryPlan[2],
                      oneYearSalaryPlan[3],
                      oneYearSalaryPlan[4],
                      oneYearSalaryPlan[5],
                      oneYearSalaryPlan[6],
                      oneYearSalaryPlan[7],
                      oneYearSalaryPlan[8],
                      oneYearSalaryPlan[9],
                      oneYearSalaryPlan[10],
                      oneYearSalaryPlan[11],
                      oneYearSalaryPlan[12],
                    ],
                  },
                }
              );
            }
          }
        }

        // for(let i=0;i<u.teams.length;i++)
        // {

        //     if(u.teams[i]['direct'].id.toString()==user._id.toString())
        //     {
        //         await User.findByIdAndUpdate({_id:user.invite},
        //             {$set:{
        //                 [`teams.${i}.direct.plan`]:'yes',
        //                 [`teams.${i}.direct.investment`]:result.investment,
        //                 [`teams.${i}.direct.salaryDate`]:[oneYearSalaryPlan[1],oneYearSalaryPlan[2],oneYearSalaryPlan[3],oneYearSalaryPlan[4],oneYearSalaryPlan[5],oneYearSalaryPlan[6],oneYearSalaryPlan[7],oneYearSalaryPlan[8],oneYearSalaryPlan[9],oneYearSalaryPlan[10],oneYearSalaryPlan[11],oneYearSalaryPlan[12],]
        //             }
        //             })
        //     }

        //     if(secondindirect.teams[i]['indirect'].id.toString()==secondUser._id.toString() ||secondindirect.teams[i]['indirect'].id=="")
        //         {
        //             await User.findByIdAndUpdate(
        //                  {_id:secondindirect._id},
        //                 {$set:{
        //                     [`teams.${i}.indirect.plan`]:'yes',
        //                     [`teams.${i}.indirect.investment`]:result.investment,
        //                     [`teams.${i}.indirect.salaryDate`]:[oneYearSalaryPlan[1],oneYearSalaryPlan[2],oneYearSalaryPlan[3],oneYearSalaryPlan[4],oneYearSalaryPlan[5],oneYearSalaryPlan[6],oneYearSalaryPlan[7],oneYearSalaryPlan[8],oneYearSalaryPlan[9],oneYearSalaryPlan[10],oneYearSalaryPlan[11],oneYearSalaryPlan[12],]
        //                 }}
        //                 )
        //         }
        //     }
      }
      //EMAIL PROCESS
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
        to: `${emailaddressto}`,
        subject: "GHORY.TRADE",
        text: `Dear sir ${emailaddressto},
                    
                    We're excited to share the wonderful news that your subscription plan has been successfully activated on your account at ghory.trade. Welcome to a
                    new world of possibilities!
                    
                    With your active subscription, you now have access to all the premium features and benefits that come with your chosen plan.
                    
                    Thank you for choosing ghory.trade as your subscription provider. We're committed to delivering exceptional value and service throughout your
                    subscription journey.
                    
                    
                    Here's to a fantastic experience ahead!
                    Best regards,
                    `,
      };
      await new Promise((resolve, reject) => {
        // verify connection configuration
        transporter.verify(function (error, success) {
          if (error) {
            console.log(error);
            reject(error);
          } else {
            console.log("Server is ready to take our messages");
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
      res.status(200).json({ success: true });
    } catch (e) {
      res.status(200).send({ success: true });
    }
  } else {
    
    if(checkUserPreviousDetails.planId.length==1 ){
      console.log('case 1')
      await User.updateOne(
            { email: result.email },
            { subscription: "no",
              YearPlan: [],
              planId:[],
              perDayProfit:0,
              totalInvestment:0,
              Level: "0",
              review:'no',
              $inc:{planCount:-1},
             }
            );
    }else if(checkUserPreviousDetails.planId.length==0){
      console.log('case 2')
      await User.updateOne(
        { email: result.email },
        { subscription: "no",
          review:'no',
          $inc:{planCount:-1},
         }
        );
    }else{
      console.log('case 3')

      for(let i=0;i<checkUserPreviousDetails.planId.length; i++)
      {
        if(req.query._id==checkUserPreviousDetails.planId[i])
        {
        const investmentDecrement = checkUserPreviousDetails.totalInvestment - result.investment
        let ppt = (((result.investment)*20)/100)/30
        const profit = checkUserPreviousDetails.perDayProfit - ppt
        await User.updateOne(
          { email: result.email },
          { 
            investment:investmentDecrement,
            perDayProfit:profit,
            $inc:{planCount:-1},
            $pull:{planId:req.query._id
            }
           }
          );
        }

      }
    }
   
    let user = await User.findOne({ email: result.email });
    try {
      if (user.invite != "") {
        let thirdDoc = await User.findOne({ _id: user.invite });

        if (thirdDoc.invite != "") {
          let Leader = await User.findOne({ _id: thirdDoc.invite });
          if (Leader.invite != "") {
            // new if
            for (let i = 0; i < Leader.teams.length; i++) {
              if (
                user._id.toString() ===
                Leader.teams[i]["indirect"].id.toString()
              ) {
                await User.findByIdAndUpdate(
                  { _id: Leader._id },
                  {
                    $set: {
                      [`teams.${i}.indirect.plan`]: "no",
                      [`teams.${i}.indirect.investment`]: 0,
                      [`teams.${i}.indirect.salaryDate`]: [],
                    },
                  }
                );
              }
            }

            for (let i = 0; i < thirdDoc.teams.length; i++) {
              if (
                user._id.toString() ===
                thirdDoc.teams[i]["direct"].id.toString()
              ) {
                await User.findByIdAndUpdate(
                  { _id: thirdDoc._id },
                  {
                    $set: {
                      [`teams.${i}.direct.plan`]: "no",
                      [`teams.${i}.direct.investment`]: 0,
                      [`teams.${i}.direct.salaryDate`]: [],
                    },
                  }
                );
              }
            }
          } else if (Leader.invite == "") {
            for (let i = 0; i < Leader.teams.length; i++) {
              if (
                user._id.toString() ===
                Leader.teams[i]["indirect"].id.toString()
              ) {
                await User.findByIdAndUpdate(
                  { _id: Leader._id },
                  {
                    $set: {
                      [`teams.${i}.indirect.plan`]: "no",
                      [`teams.${i}.indirect.investment`]: 0,
                      [`teams.${i}.indirect.salaryDate`]: [],
                    },
                  }
                );
              }
            }

            for (let i = 0; i < thirdDoc.teams.length; i++) {
              if (
                user._id.toString() ===
                thirdDoc.teams[i]["direct"].id.toString()
              ) {
                await User.findByIdAndUpdate(
                  { _id: thirdDoc._id },
                  {
                    $set: {
                      [`teams.${i}.direct.plan`]: "no",
                      [`teams.${i}.direct.investment`]: 0,
                      [`teams.${i}.direct.salaryDate`]: [],
                    },
                  }
                );
              }
            }
          }
        } else {
          for (let i = 0; i < thirdDoc.teams.length; i++) {
            if (
              user._id.toString() == thirdDoc.teams[i]["direct"].id.toString()
            ) {
              await User.findByIdAndUpdate(
                { _id: thirdDoc._id },
                {
                  $set: {
                    [`teams.${i}.direct.plan`]: "no",
                    [`teams.${i}.direct.investment`]: 0,
                    [`teams.${i}.direct.salaryDate`]: [],
                  },
                }
              );
            }
          }
        }
      }

      res.status(200).json({ success: true });
    } catch (e) {
      res.status(200).send({ success: true });
    }
    res.status(200).send({ success: true });
  }
};

export default ConnectMongoDB(handler);
