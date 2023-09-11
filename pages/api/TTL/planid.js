import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'
import Plan from '../../../models/Plan'

const handler= async (req, res)=> 
{
    if(req.method=='POST')
    {
        const {Userid} = req.body;
        let user = await User.findOne({_id:Userid})
        for(let i=0;i<user.teams.length;i++)
        {
            if(user.teams[i]['direct'].id.toString()!='')
            {
                let directUser = await User.findOne({_id:user.teams[i]['direct'].id.toString()}) 
                if(directUser.planId=="")
                {
                    await User.updateOne({_id:Userid},{$set:{[`teams.${i}.direct.plan`]:'no'}}) 
                }else{
            let directUserDoc = await Plan.findOne({_id:directUser.planId})
                    await User.updateOne({_id:Userid},{$set:{[`teams.${i}.direct.plan`]:'yes',[`teams.${i}.direct.investment`]:directUserDoc.investment}}) 
                }
            }
            if(user.teams[i]['indirect'].id.toString()!=''){
                let indirectUser = await User.findOne({_id:user.teams[i]['indirect'].id.toString()}) 
                if(indirectUser.planId=="")
                {
                    await User.updateOne({_id:Userid},{$set:{[`teams.${i}.indirect.plan`]:'no'}}) 
                }else{
                
                    let indirectUserDoc = await Plan.findOne({_id:indirectUser.planId})
                    await User.updateOne({_id:Userid},{$set:{[`teams.${i}.indirect.plan`]:'yes',[`teams.${i}.indirect.investment`]:indirectUserDoc.investment}}) 
                }
            }
        }
        res.status(200).json({success:true})
    }
    else
        res.status(200).json({ error : 'request method is incorrect it should be post' })
}
  
  
  
  export default   ConnectMongoDB(handler)