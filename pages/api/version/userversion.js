import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'

const handler= async (req, res)=> {
    if(req.method=='GET'){
            let version = await User.findOne({_id:req.query.Userid})
            version = version.__v
            res.status(200).send({version:version})
    }
    
}
  
  
  
export default   ConnectMongoDB(handler)