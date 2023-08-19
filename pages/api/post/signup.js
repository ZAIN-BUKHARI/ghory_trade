import User from '../../../models/User'
import ConnectMongoDB from '../../../middleware/mongoose'
var CryptoJS = require("crypto-js");

const handler= async (req, res)=> {
    if(req.method=='POST'){
      try{

        const {firstname,lastname,email}=req.body
         let u = new User({firstname,lastname,email,password:CryptoJS.AES.encrypt(req.body.password,'secret123').toString()})
        await u.save()

        res.status(200).json({ success:true })
      
    }
    catch{
      res.status(200).json({ error:false })
    }
      
    }
    else{

    res.status(400).json({ error : 'this method is not defined' })
}
   
  }

  
  
  export default   ConnectMongoDB(handler)