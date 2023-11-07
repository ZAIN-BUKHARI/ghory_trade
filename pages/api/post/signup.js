import User from '../../../models/User'
import ConnectMongoDB from '../../../middleware/mongoose'
var CryptoJS = require("crypto-js");
const nodemailer = require('nodemailer');


const handler= async (req, res)=> {
  console.log('hitttttttttttttttttttttt')
  const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; // Months start at 0!
        let dd = today.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;
        const formattedToday = dd + '/' + mm + '/' + yyyy;
  const {firstname,lastname,email}=req.body
    if(req.method=='POST'){
      try{
              let u = new User({firstname,lastname,email,password:CryptoJS.AES.encrypt(req.body.password,'secret123').toString(),date:formattedToday})
                u.save()
                res.status(200).json({success:true})

                     
            
  
}
    catch{
      res.status(200).json({ error: 'You missed something' })
    }
      
  }
    else
      res.status(200).json({ error : 'Try again' })
}

  
  
  export default   ConnectMongoDB(handler)