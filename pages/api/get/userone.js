import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'

const handler= async (req, res)=> {
    let user = await User.findOne({email:req.query.email})
    res.status(200).send({user})
}
  
  
  
export default   ConnectMongoDB(handler)