import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'

const handler= async (req, res)=> {
    if(req.method=='GET'){
        let u = await User.findOne({email:req.query.email})
            res.status(200).json({id:u._id})
    }
}
  
  
  
export default   ConnectMongoDB(handler)