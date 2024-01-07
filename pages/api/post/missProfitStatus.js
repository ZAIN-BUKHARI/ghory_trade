import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'
import Video from '../../../models/Video'
import {joinDate} from '../../../Api_utils/statusfn'
const handler= async (req, res)=> {
    await Video.deleteMany()
    await User.updateMany({subscription:'yes'},{todaywork:"no",views:0,Login:"no"})
    res.status(200).send({success:true})
}
  
  
  
export default   ConnectMongoDB(handler)