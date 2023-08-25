import User from '../../../models/User'
import ConnectMongoDB from '../../../middleware/mongoose'
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');

const handler= async (req, res)=> {
  const {email,password} = req.body
  try{

    if(req.method=='POST'){
      if(email.length!=0 && password.length!=0)
      {
       let user = await User.findOne({email:email})
       if(user.email!=email)  res.status(200).json({error:'User not found' })
       const bytes  = CryptoJS.AES.decrypt(user.password, 'secret123')
       const originalText = bytes.toString(CryptoJS.enc.Utf8);
       if(user){
         if(password==originalText){
            const token = jwt.sign( {email:user.email},'secret123', {expiresIn: '7d'})
             res.status(200).json({success:true,token,user})
            }
            else{
             res.status(200).json({ success:false,error:'Invalid credientials' })
             
            }
        }
        else{

            res.status(200).json({error:'User not found'})
        }

    }
    else{

      res.status(200).json({ error : 'Empty input fields' })
     }
  } 
    else{

  res.status(200).json({ error : 'User not found' })
 }
  }catch(e){
  res.status(200).json({ error : 'User not found' })

  }
   
  }

  
  
  export default   ConnectMongoDB(handler)