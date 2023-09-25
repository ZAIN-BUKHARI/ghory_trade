import ConnectMongoDB from '../../../middleware/mongoose'
const nodemailer = require('nodemailer');

const handler= async (req, res)=> {
    if(req.method=='POST'){
       const {email}=req.body
       let a = Math.random(5)
       a = a.toString().slice(2,6)
       try{ 
        let transporter = nodemailer.createTransport({
            service: 'Gmail',
              auth: {
              user: `${process.env.NODE_MAILER_USER}`, 
              pass: `${process.env.NODE_MAILER_PASS}`
                    }
        });
        let mailOptions = {
            from: `${process.env.NODE_MAILER_USER}`, 
            to: `${email}`,
        subject: 'GHORY.TRADE',
        text: `OTP CODE FOR EMAIL VERIFICATION ${a}
        `
        };
        transporter.sendMail(mailOptions).then(result=>{
            try{
            }catch(e){
            }
            
             })
             res.status(200).json({otp:a,success:true})
       }
       catch(error){
        res.status(200).json({ error:false })
       }
}
else{

    res.status(200).json({ error : true })
}
  }
  
  
  
  export default   ConnectMongoDB(handler)