import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'

const handler= async (req, res)=> {
    if(req.method=='GET'){
        // let user = await User.updateOne({"teams.direct.id":'656b22b9bb08adca87fa6f60'},{commission:2})
        let user = await User.findOne({"teams.direct.level":1})
        res.status(200).json({user})
    }
    
}
  
  
  
export default   ConnectMongoDB(handler)