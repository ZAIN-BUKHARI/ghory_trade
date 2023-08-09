import Admin from '../../models/Admin'
import ConnectMongoDB from '../../middleware/mongoose'
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');

const handler= async (req, res)=> {
    if(req.method=='POST'){
       let user = await Admin.findOne({"email":req.body.email})
       const bytes  = CryptoJS.AES.decrypt(user.password, 'secret123')
       const originalText = bytes.toString(CryptoJS.enc.Utf8);
       if(user){
                 if(req.body.email==user.email && req.body.password==originalText){
                    const token = jwt.sign( {email:user.email},'secret123', {expiresIn: '7d'})
                     res.status(200).json({success:true,token})
                    }
                    else{
                     res.status(200).json({ success:false,error:'Invalid credientials' })             
                   }
             }
       else{
        res.status(200).json({error:false})
       }
 
        }
       
   
  }

  
  
  export default   ConnectMongoDB(handler)

// const handler= async (req, res)=> {
//     if(req.method=='POST'){
//        let user = await User.findOne({"email":req.body.email})
//        const bytes  = CryptoJS.AES.decrypt(user.password, 'secret123')
//        const originalText = bytes.toString(CryptoJS.enc.Utf8);
//        if(user){
//          if(req.body.email==user.email && req.body.password==originalText){
//             const token = jwt.sign( {email:user.email},'secret123', {expiresIn: '7d'})
//              res.status(200).json({success:true,token})
//             }
//             else{
//              res.status(200).json({ success:false,error:'Invalid credientials' })
             
//             }
//         }
//         else{

//             res.status(200).json({ success:false , error:'User not found'})
//         }

//     }
//     else{

//   res.status(400).json({ error : 'this method is not defined' })
// }
   
//   }

  
  
//   export default   ConnectMongoDB(handler)