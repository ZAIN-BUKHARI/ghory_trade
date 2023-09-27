import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'

const handler= async (req, res)=> {
    if(req.method=='POST'){
        await User.updateOne({email:req.body.email},{Login:"yes"})
        res.status(200).json(true)
    }
    if(req.method=='GET'){
        await User.updateOne({email:req.body.email},{Login:"no"})
        res.status(200).json(true)

    }
}
  
  
  
export default   ConnectMongoDB(handler)