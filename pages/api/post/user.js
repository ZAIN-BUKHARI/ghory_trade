import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'

const handler= async (req, res)=> {
        const {_id}=req.body
        let user = await User.find({_id})
        res.status(200).send({success:true,user})
}
  
  
  
export default   ConnectMongoDB(handler)