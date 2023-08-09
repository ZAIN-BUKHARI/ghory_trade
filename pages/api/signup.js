import User from '../../models/User'
import ConnectMongoDB from '../../middleware/mongoose'
var CryptoJS = require("crypto-js");

const handler= async (req, res)=> {
    if(req.method=='POST'){
      try{

        const {name,email}=req.body
        console.log(name,email)
         let u = new User({name,email,password:CryptoJS.AES.encrypt(req.body.password,'secret123').toString()})
         
        await u.save()

        res.status(200).json({ success:'success' })
      
    }
    catch{
      res.status(200).json({ error:'duplicate' })
    }
      
    }
    else{

    res.status(400).json({ error : 'this method is not defined' })
}
   
  }

  
  
  export default   ConnectMongoDB(handler)