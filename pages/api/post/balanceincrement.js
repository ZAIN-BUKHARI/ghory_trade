import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'

const handler= async (req, res)=> {
    if(req.method=='POST'){
        const {updatedamount,email} = req.body
        await User.updateOne({email:email},{balance:updatedamount,todaywork:'yes'})
        res.status(200).send(true)   
    }
}
  
  
  
export default   ConnectMongoDB(handler)


