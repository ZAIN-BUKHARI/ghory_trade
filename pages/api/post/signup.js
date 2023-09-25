import User from '../../../models/User'
import ConnectMongoDB from '../../../middleware/mongoose'
var CryptoJS = require("crypto-js");
const nodemailer = require('nodemailer');


const handler= async (req, res)=> {
  const {firstname,lastname,email,password,cpassword}=req.body
    if(req.method=='POST'){
      try{
        try{

          let f = await User.findOne({email:email})
          if(f.email==email)
          {
            res.status(200).json({error:'Email must be unique'})
          }
        }catch(e){

        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; // Months start at 0!
        let dd = today.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;
        const formattedToday = dd + '/' + mm + '/' + yyyy;
        
          if(email.includes('@')){
          if(firstname.length!=0&&lastname.length!=0&&email.length!=0&&password.length!=0  ){
            if(password == cpassword){
              let u = new User({firstname,lastname,email,password:CryptoJS.AES.encrypt(req.body.password,'secret123').toString(),date:formattedToday})
              if(u.email==email){
                u.save()
                try{
                  let name = u.firstname;
                  let emailaddressto = u.email
                
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
                 
                  let mailOptions = {
                      from: `${process.env.NODE_MAILER_USER}`, 
                      to: `${emailaddressto}`,
                      subject: 'GHORY.TRADE',
                      text: `Dear ${name},
  
  We are thrilled to welcome you to ghory.trade! Your account has been successfully created, and we're excited to have you as part of our community.
  
  With your new account, you can start exploring all that ghory.trade has to offer. we have a wide range of offerings to cater to your needs.`
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
                        // console.error(err);
                        // reject(err);
                        res.status(200).json({success:false})
                    } else {
                     res.status(200).json({otp:a,success:true})
                     // resolve(info);
                    }
                });
            });
  
                  
  


















                   
                   }catch(e){
                    res.status(200).json({error:'server down'})
                   }     
              }
            }
            else
            res.status(200).json({ error:'Password not match' })
        }
        else
        res.status(200).json({ error:'Empty field' })
      }else
      res.status(200).json({ error:'Email must be unique' })
  }
}
    catch{
      res.status(200).json({ error: 'You missed something' })
    }
      
  }
    else
      res.status(200).json({ error : 'Try again' })
}

  
  
  export default   ConnectMongoDB(handler)