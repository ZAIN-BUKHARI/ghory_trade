import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'

const handler= async (req, res)=> {
    if(req.method=='GET'){
        let users = await User.find()
         users = users.length
        res.status(200).send({users})
    }
   
}
  
  
  
export default   ConnectMongoDB(handler)