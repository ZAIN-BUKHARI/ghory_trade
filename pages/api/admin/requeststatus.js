import ConnectMongoDB from "../../../middleware/mongoose";
import Request from "../../../models/Request";
import User from "../../../models/User";
const nodemailer = require("nodemailer");
import {joinDate} from '../../../Api_utils/statusfn'
const handler = async (req, res) => {
 
  
  try {
    if (req.query.status == "verified") {
      let response = await Request.findByIdAndUpdate(
        { _id: req.query._id },
        { status: req.query.status }
      );
      if (response._id.toString() == req.query._id) {
        //   email------------------------------------------------------------------------------
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
          to: `${response.email}`,
          subject: "GHORY.TRADE",
          text: `Withdrawal Details:
                Request Date: [${joinDate}]
                Withdrawal Amount: [${response.amount}]
                Account Number: [${response.address}]
                Transaction ID: [${response._id.toString()}]
                Fee : [${(response.amount * 5) / 100}]
                    
                Please allow for a processing time of 1-2 mins for the funds to reflect in your account. If you encounter any issues or have further questions, please feel 
                free to reach out to our customer support team usman@ghory.trade.
  
                We appreciate your trust in our services and are pleased to have the opportunity to assist you with your financial needs. Should you require any
                assistance in the future, please don't hesitate to contact us.
                    
                Thank you for choosing Ghory.trade.
                    
                Best regards,
                Usman Amir
                Manager
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
            } else {
              // resolve(info);
            }
          });
        });

        res.status(200).json({ success: true });
        /*/email ----------------------------------------------------------------------------------*/
      } else {
        res.status(200).send({ success: false });
      }
    } else if (req.query.status == "pending") {
      let result = await Request.findByIdAndUpdate(
        { _id: req.query._id },
        { status: req.query.status }
      );
      await result.save();
      res.status(200).send({ success: true });
    } else {
      let result = await Request.findByIdAndUpdate(
        { _id: req.query._id },
        { status: req.query.status }
      );
      await User.updateOne(
        { email: result.email },
        {
          $inc: { balance: result.amount },
        }
      );
      res.status(200).send({ success: true });
    }
  } catch (e) {
    res.status(200).send({ error: false });
  }
};

export default ConnectMongoDB(handler);
