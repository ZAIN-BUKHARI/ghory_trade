import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'
const CryptoJS = require("crypto-js");
const nodemailer = require('nodemailer');

const handler= async (req, res)=> {

if(req.method=='POST')
{
    const {email,password}=req.body;

    let user = await User.findOne({email})
    if(user!=null)
    {
        try{
            const bytes  = CryptoJS.AES.decrypt(user.password, 'secret123')
            const decryptPass = bytes.toString(CryptoJS.enc.Utf8);
            let changepass = await User.findOneAndUpdate({email},{password:CryptoJS.AES.encrypt(password,'secret123').toString()})
            res.status(200).json({success:true})
        }catch(e){
            res.status(200).json({success:false})
        }
           
    }
    else
    {
        res.status(200).json({error:'User not found'})
    }
}
  }
  
  
  
  export default   ConnectMongoDB(handler)


    

    

    