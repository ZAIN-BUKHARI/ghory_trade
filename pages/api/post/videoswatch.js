import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'

const handler= async (req, res)=> {
    if(req.method=='POST'){
        const {email} = req.body
        let user = await User.findOne({email})
        const views=user.views+1;
        await User.updateOne({email:email},{views:views})
        res.status(200).send(true)   
    }
}
  
  
  
export default   ConnectMongoDB(handler)


