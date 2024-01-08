import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'
import Video from '../../../models/Video'
const handler= async (req, res)=> {
    await Video.deleteMany()
    await User.updateMany({},{todaywork:"no",views:0,Login:"no",commission:0})
    res.status(200).send({'success':true})
}
  
  
  
export default   ConnectMongoDB(handler)