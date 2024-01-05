import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'

const handler= async (req, res)=> {
        await User.updateOne({email:'ghoryg7@gmail.com'},{upload:true})
        res.status(200).json({success:true})
   
    
}
  
  
  
export default   ConnectMongoDB(handler)