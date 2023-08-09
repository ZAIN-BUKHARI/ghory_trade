


import User from '../../models/User'
import ConnectMongoDB from '../../middleware/mongoose'
const CryptoJS = require("crypto-js");

const handler= async (req,res)=>{
    if(req.method=='POST'){
        let userdata = await User.findOne({email:req.body.email})
        if(userdata.email==req.body.email){
        
        const bytes  = CryptoJS.AES.decrypt(userdata.password, 'secret123')
        const decryptPass = bytes.toString(CryptoJS.enc.Utf8);
        if(req.body.newpassword==req.body.confirmpassword){
            let changepass = await User.findOneAndUpdate({email:req.body.email},{password:CryptoJS.AES.encrypt(req.body.confirmpassword,'secret123').toString()})
            res.status(200).json({success:changepass})
        }
    }
        
        else{

            res.status(200).json({ error:false})
        }
        
            
        

    }
   

}

export default   ConnectMongoDB(handler)
