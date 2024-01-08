import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'

const handler= async (req, res)=> {
        await User.updateMany({},{commission:0})
        res.send({'success':true})
}
  
  
  
export default   ConnectMongoDB(handler)