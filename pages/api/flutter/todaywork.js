import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'

const handler= async (req, res)=> {
    if(req.method=='GET'){
        let u = await User.findOne({email:req.query.email})
        if(u.todaywork=='yes')
            res.status(200).json({todaywork:true})
        else
            res.status(200).json({todaywork:false})
    }
}
  
  
  
export default   ConnectMongoDB(handler)