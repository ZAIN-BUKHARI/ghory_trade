import User from '../../../models/User'
import ConnectMongoDB from '../../../middleware/mongoose'
var CryptoJS = require("crypto-js");

const handler= async (req, res)=> {
  const {firstname,lastname,email,password,cpassword}=req.body
    if(req.method=='POST'){
      try{
        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; // Months start at 0!
        let dd = today.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;
        const formattedToday = dd + '/' + mm + '/' + yyyy;
        if(firstname.length!=0&&lastname.length!=0&&email.length!=0&&password.length!=0){
          if(password == cpassword){
            let u = new User({firstname,lastname,email,password:CryptoJS.AES.encrypt(req.body.password,'secret123').toString(),date:formattedToday})
           await u.save()
             res.status(200).json({ success:true })
          }
         else
         res.status(200).json({ error:'Password not macthed' })
    }
    else
      res.status(200).json({ error:'Empty field' })
   }
    catch{
      res.status(200).json({ error: 'You missed something' })
    }
      
  }
    else
      res.status(200).json({ error : 'Try again' })
}

  
  
  export default   ConnectMongoDB(handler)