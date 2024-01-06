import ConnectMongoDB from '../../../middleware/mongoose'
const nodemailer = require('nodemailer');

const handler= async (req, res)=> {
    if(req.method=='POST'){
            const {email,name,msg}=req.body
            console.log(email,name,msg)
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
            from: `${email}`, 
            to: `${process.env.NODE_MAILER_USER}`,
        subject: 'UG-TRADING',
        text: msg
        };
        await new Promise((resolve, reject) => {
        // send mail
        transporter.sendMail(mailData, (err, info) => {
            if (err) {
                res.status(200).json({success:false})
                reject(err);
            } else {
             res.status(200).json({success:true})
             resolve(info);
            }
        });
    });
            res.status(200).json({success:true})
       
}

  }
  
  
  
  export default   ConnectMongoDB(handler)


    

    

    