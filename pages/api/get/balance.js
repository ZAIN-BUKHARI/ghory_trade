import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'

const handler= async (req, res)=> {
    if(req.method=='POST'){
        let u = await User.findOne({email:req.body.email})
        console.log(u)
        res.status(200).json({success:true,balance:u.balance})
    }
    
}
  
  
  
export default   ConnectMongoDB(handler)