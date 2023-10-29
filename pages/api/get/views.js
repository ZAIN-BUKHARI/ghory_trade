import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'

const handler= async (req, res)=> {
    if(req.method=='GET'){
            let user = await User.findOne({email:req.query.email})
            res.status(200).send({views:user.views})
    }
    
}
  
  
  
export default   ConnectMongoDB(handler)