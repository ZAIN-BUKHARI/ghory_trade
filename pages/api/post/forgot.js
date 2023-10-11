import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'
const CryptoJS = require("crypto-js");

const handler= async (req, res)=> {
//     if(req.method=='POST'){
//        const {email}=req.body
//        let a = Math.random(5)
//        a = a.toString().slice(2,6)
//        try{ 
//         let user = await User.findOne({email:email})
//         if(user.email==email)
//         {
//             res.status(200).json({error:"Email must be unique"})
//         }
//        }
//        catch(error){
//         let transporter = nodemailer.createTransport({
//             port: 465,
//             host: "smtp.gmail.com",
//             service: 'Gmail',
//               auth: {
//               user: `${process.env.NODE_MAILER_USER}`, 
//               pass: `${process.env.NODE_MAILER_PASS}`
//                     },
//              secure: true,

//         });
//         await new Promise((resolve, reject) => {
//                     // verify connection configuration
//                     transporter.verify(function (error, success) {
//                         if (error) {
//                             console.log(error);
//                             reject(error);
//                         } else {
//                             console.log("Server is ready to take our messages");
//                             resolve(success);
//                         }
//                     });
//                 });
//         let mailData = {
//             from: `${process.env.NODE_MAILER_USER}`, 
//             to: `${email}`,
//         subject: 'GHORY.TRADE',
//         text: `OTP CODE FOR EMAIL VERIFICATION ${a}
//         `
//         };
//         await new Promise((resolve, reject) => {
//         // send mail
//         transporter.sendMail(mailData, (err, info) => {
//             if (err) {
//                 // console.error(err);
//                 // reject(err);
//                 res.status(200).json({success:false})
//             } else {
//              res.status(200).json({otp:a,success:true})
//              // resolve(info);
//             }
//         });
//     });
//             res.status(200).json({otp:a,success:true})
//        }
// }
// else{

//     const {email}=req.query
//     let a = Math.random(5)
//     a = a.toString().slice(2,6)
   
//      let transporter = nodemailer.createTransport({
//          port: 465,
//          host: "smtp.gmail.com",
//          service: 'Gmail',
//            auth: {
//            user: `${process.env.NODE_MAILER_USER}`, 
//            pass: `${process.env.NODE_MAILER_PASS}`
//                  },
//           secure: true,

//      });
//      await new Promise((resolve, reject) => {
//                  // verify connection configuration
//                  transporter.verify(function (error, success) {
//                      if (error) {
//                          console.log(error);
//                          reject(error);
//                      } else {
//                          console.log("Server is ready to take our messages");
//                          resolve(success);
//                      }
//                  });
//              });
//      let mailData = {
//          from: `${process.env.NODE_MAILER_USER}`, 
//          to: `${email}`,
//      subject: 'GHORY.TRADE',
//      text: `OTP CODE FOR EMAIL VERIFICATION ${a}
//      `
//      };
//      await new Promise((resolve, reject) => {
//      // send mail
//      transporter.sendMail(mailData, (err, info) => {
//          if (err) {
//              // console.error(err);
//              // reject(err);
//              res.status(200).json({success:false})
//          } else {
//           res.status(200).json({otp:a,success:true})
//           // resolve(info);
//          }
//      });
//  });
//          res.status(200).json({otp:a,success:true})
    
// }
if(req.method=='POST')
{
    const {email,password}=req.body;

    let user = await User.findOne({email})
    if(user!=null)
    {
            const bytes  = CryptoJS.AES.decrypt(user.password, 'secret123')
            const decryptPass = bytes.toString(CryptoJS.enc.Utf8);
            console.log(decryptPass)
            let changepass = await User.findOneAndUpdate({email},{password:CryptoJS.AES.encrypt(password,'secret123').toString()})
            res.status(200).json({success:changepass})
           
    }
    else
    {
        res.status(200).json({error:'User not found'})
    }
}
  }
  
  
  
  export default   ConnectMongoDB(handler)


    

    

    