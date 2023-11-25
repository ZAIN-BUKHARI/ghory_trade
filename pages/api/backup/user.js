import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'

const handler= async (req, res)=> {
        let users = await User.find()
        res.status(200).send({users})
    
}
  
  
  
export default   ConnectMongoDB(handler)