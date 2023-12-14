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
        let p = await Plan.findOne({_id:req.query.Userid})
        await Plan.findByIdAndDelete({_id:req.query.Userid})
        await User.updateOne({email:p.email},{subscription:"no",todaywork:"no",views:0,perDayProfit:0,planId:""})
        res.status(200).send({success:true})

    }
}
  
  
  
export default   ConnectMongoDB(handler)