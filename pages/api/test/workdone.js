import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'

const handler= async (req, res)=> {
    if(req.method=='GET'){
        let user = await User.find()
        await User.updateMany({},{views:10,todaywork:"no",balance:0,commission:0})
        
        res.status(200).json({success:true})
    }
    
}
  
  
  
export default   ConnectMongoDB(handler)