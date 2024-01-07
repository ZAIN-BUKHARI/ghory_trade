import ConnectMongoDB from '../../../middleware/mongoose'
const nodemailer = require('nodemailer');
import {joinDate} from '../../../Api_utils/statusfn'
import User from '../../../models/User'
const handler= async (req, res)=> {
    if(req.method=='GET'){
        try{
        let allUsers = await User.find({subscription:"yes"})
        for(let i=0;i<allUsers.length;i++)
        {
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
            to: `${allUsers[i].email}`,
        subject: 'UG-TRADING',
        text: `${joinDate} Daily work uploaded`
        };
        await new Promise((resolve, reject) => {
        // send mail
        transporter.sendMail(mailData, (err, info) => {
            if (err) {
                // res.status(200).json({success:false})
                reject(err);
            } else {
            //  res.status(200).json({success:true})
             resolve(info);
            }
        });
    });
            // res.status(200).json({success:true})
        }
            res.status(200).json({success:true})
        }
        catch(e)
        {
            res.status(200).json({success:false})
        }
       
}

  }
  
  
  
  export default   ConnectMongoDB(handler)


    

    

    