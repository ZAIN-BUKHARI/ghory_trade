import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'
import Plan from '../../../models/Plan'

const handler= async (req, res)=> {
        let user = await User.find()
        for(let i=0;i<user.length;i++)
        {
            if(user[i].planId!="")
            {
                let plan = await Plan.findOne({_id:user[i].planId})
                const number = plan.phone;
                await User.updateOne({_id:user[i]._id},{number:number})

            }
        }
        res.status(200).send({success:true})
}
  
  
  
export default   ConnectMongoDB(handler)