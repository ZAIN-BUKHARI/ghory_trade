import User from '../../../models/User'
import ConnectMongoDB from '../../../middleware/mongoose'
var CryptoJS = require("crypto-js");
const nodemailer = require('nodemailer');

const handler= async (req, res)=> {
  const {email,currentpassword} = req.body
       let user = await User.findOne({email:email})
       const bytes  = CryptoJS.AES.decrypt(user.password, 'secret123')
       const originalText = bytes.toString(CryptoJS.enc.Utf8);
       if(originalText==currentpassword){
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
         text: `OTP CODE FOR PASSWORD CHANGE ${a}
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
    
       }else{
        res.status(200).json({error:'Incorrect password',success:false})   
       }
            
        
       

    
 
   
  }

  
  
  export default   ConnectMongoDB(handler)