import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'

const handler= async (req, res)=> {
    if(req.method=='GET'){
        await User.updateMany({Login:"no",commission:0})
        res.status(200).json(true)

    }
}
  
  
  
export default   ConnectMongoDB(handler)