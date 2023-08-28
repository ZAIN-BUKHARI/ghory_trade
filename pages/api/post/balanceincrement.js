import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'

const handler= async (req, res)=> {
    if(req.method=='POST'){
        const {email} = req.body
        let user = await User.findOne({email})
        const balance=user.balance+0.67
        await User.updateOne({email:email},{balance:balance,todaywork:'yes'})
        res.status(200).send(true)   
    }
}
  
  
  
export default   ConnectMongoDB(handler)


