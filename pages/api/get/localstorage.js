import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'

const handler= async (req, res)=> {
    if(req.method=='GET'){   
        let orders = await User.find({email:req.query.token})
        res.status(200).json({success:true,orders})
    }
}
  
  
  
export default   ConnectMongoDB(handler)