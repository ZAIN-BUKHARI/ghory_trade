import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'

const handler= async (req, res)=> {
        const {Userid}=req.body
        await User.updateOne({_id:Userid},{Login:"no"})
        res.status(200).send({success:true})
}
  
  
  
export default   ConnectMongoDB(handler)