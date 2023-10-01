import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'
import Plan from '../../../models/Plan'

const handler= async (req, res)=> {
    if(req.method=='POST')
    {
        await User.findByIdAndDelete({_id:req.body.Userid})
        res.status(200).send({success:true})
    }
    else{
        await Plan.findByIdAndDelete({_id:req.query.Userid})
        res.status(200).send({success:true})

    }
}
  
  
  
export default   ConnectMongoDB(handler)