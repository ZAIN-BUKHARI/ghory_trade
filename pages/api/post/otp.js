import ConnectMongoDB from '../../../middleware/mongoose'
const nodemailer = require('nodemailer');
import User from '../../../models/User'

const handler= async (req, res)=> {
    if(req.method=='POST'){
       const {email}=req.body
        let a = Math.random(5)
        a = a.toString().slice(2,6)
        let user = await User.findOne({email:email})
        if(user!=null)
        {
            res.status(200).json({error:"Account already created",success:false})
        }else{
        let transporter = nodemailer.createTransport({
            port: 465,
            host: "smtp.gmail.com",
            service: 'Gmail',
              auth: {
              user: `${process.env.NODE_MAILER_USER}`, 
              pass: `${process.env.NODE_MAILER_PASS}`
                    },
             secure: true,
        });
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
        let mailData = {
            from: `${process.env.NODE_MAILER_USER}`, 
            to: `${email}`,
        subject: 'GHORY.TRADE',
        text: `OTP CODE FOR EMAIL VERIFICATION ${a}
        `
        };
        await new Promise((resolve, reject) => {
        // send mail
        transporter.sendMail(mailData, (err, info) => {
            if (err) {
                // console.error(err);
                reject(err);
                res.status(200).json({success:false})
            } else {
             res.status(200).json({otp:a,success:true})
             // resolve(info);
            }
        });
        });
        res.status(200).json({otp:a,success:true})
    }
}
else{

    const {email}=req.query
    let a = Math.random(5)
    a = a.toString().slice(2,6)
   
     let transporter = nodemailer.createTransport({
         port: 465,
         host: "smtp.gmail.com",
         service: 'Gmail',
           auth: {
           user: `${process.env.NODE_MAILER_USER}`, 
           pass: `${process.env.NODE_MAILER_PASS}`
                 },
          secure: true,

     });
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
     let mailData = {
         from: `${process.env.NODE_MAILER_USER}`, 
         to: `${email}`,
     subject: 'GHORY.TRADE',
     text: `OTP CODE FOR EMAIL VERIFICATION ${a}
     `
     };
     await new Promise((resolve, reject) => {
     // send mail
     transporter.sendMail(mailData, (err, info) => {
         if (err) {
             // console.error(err);
             // reject(err);
             res.status(200).json({success:false})
         } else {
          res.status(200).json({otp:a,success:true})
          // resolve(info);
         }
     });
 });
         res.status(200).json({otp:a,success:true})
    
}
  }
  
  
  
  export default   ConnectMongoDB(handler)


    

    

    
//     const mailData = {
//         from: {
//             name: `${firstName} ${lastName}`,
//             address: "myEmail@gmail.com",
//         },
//         replyTo: email,
//         to: "recipient@gmail.com",
//         subject: `form message`,
//         text: message,
//         html: `${message}`,
//     };
    
//     await new Promise((resolve, reject) => {
//         // send mail
//         transporter.sendMail(mailData, (err, info) => {
//             if (err) {
//                 console.error(err);
//                 reject(err);
//             } else {
//                 console.log(info);
//                 resolve(info);
//             }
//         });
//     });
    