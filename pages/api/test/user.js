import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'

const handler= async (req, res)=> {
    if(req.method=='GET'){
        let user = await User.findOne({email:"su92-bssem-f22-030@superior.edu.pk"})
        console.log(user.teams[0][direct].investment)
        res.status(200).json({success:true})
    }
    
}
  
  
  
export default   ConnectMongoDB(handler)