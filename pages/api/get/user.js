import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'

const handler= async (req, res)=> {
    let orders = await User.find()
    res.status(200).send({orders})
}
  
  
  
export default   ConnectMongoDB(handler)