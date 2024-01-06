import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'
import {joinDate} from '../../../Api_utils/statusfn'
const handler= async (req, res)=> {
    await User.updateMany({subscription:'yes',todaywork:'no'},{views:0,Login:"no",$push: { missProfits: joinDate}})    
    await User.updateMany({todaywork:'yes'},{todaywork:"no",views:0,Login:"no"})
    res.status(200).send({success:true})
}
  
  
  
export default   ConnectMongoDB(handler)