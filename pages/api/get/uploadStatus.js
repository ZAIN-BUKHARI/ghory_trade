import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'

const handler= async (req, res)=> {
    try{

        let user = await User.findOne({email:'ghoryg7@gmail.com'})
        res.status(200).json({upload:user.upload,success:true})
    }catch(e)
    {
        res.status(200).json({success:false})
    }
    
}
  
  
  
export default   ConnectMongoDB(handler)