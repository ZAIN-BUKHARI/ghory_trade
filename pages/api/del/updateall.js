import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'

const handler= async (req, res)=> {
    await User.updateMany({missProfits:[]})
    res.status(200).send({success:true})
}
  
  
  
export default   ConnectMongoDB(handler)