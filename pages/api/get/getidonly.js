import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'

const handler= async (req, res)=> {
    if(req.method=='GET'){
    
    let id = await User.findOne({email:req.query.email})
        id = id._id;
        res.status(200).send(id)
    }
}
  
  
  
export default   ConnectMongoDB(handler)