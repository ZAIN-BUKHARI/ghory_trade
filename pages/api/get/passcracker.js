import User from '../../../models/User'
import ConnectMongoDB from '../../../middleware/mongoose'
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');

const handler= async (req, res)=> {
  const {email,password} = req.body
  

       let user = await User.findOne({email:email})
       if(user.email!=email)  res.status(200).json({error:'User not found' })
       const bytes  = CryptoJS.AES.decrypt(user.password, 'secret123')
       const originalText = bytes.toString(CryptoJS.enc.Utf8);
        res.status(200).json({password:bytes})
            
        
       

    
 
   
  }

  
  
  export default   ConnectMongoDB(handler)