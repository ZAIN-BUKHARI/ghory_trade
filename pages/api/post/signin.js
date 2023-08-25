import User from '../../../models/User'
import ConnectMongoDB from '../../../middleware/mongoose'
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');

const handler= async (req, res)=> {
    if(req.method=='POST'){
      console.log(req.body.email)
       let user = await User.findOne({"email":req.body.email})
      //  if(user!=req.body.email)  res.status(200).json({ success:false,error:'Check your email' })
       const bytes  = CryptoJS.AES.decrypt(user.password, 'secret123')
       const originalText = bytes.toString(CryptoJS.enc.Utf8);
       if(user){
         if(req.body.email==user.email && req.body.password==originalText){
            const token = jwt.sign( {email:user.email},'secret123', {expiresIn: '7d'})
             res.status(200).json({success:true,token,user})
            }
            else{
             res.status(200).json({ success:false,error:'Invalid credientials' })
             
            }
        }
        else{

            res.status(200).json({ success:false , error:'User not found'})
        }

    }
    else{

  res.status(400).json({ error : 'this method is not defined' })
}
   
  }

  
  
  export default   ConnectMongoDB(handler)