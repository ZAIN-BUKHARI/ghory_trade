import { use } from 'react'
import ConnectMongoDB from '../../../middleware/mongoose'
import Plan from '../../../models/Plan'
import User from '../../../models/User'
import mail from '../mailsender/email'

const handler= async (req, res)=> {
    
        let result = await Plan.findByIdAndUpdate({_id:req.query._id},{status:req.query.status})
        await result.save()
        if(result && req.query.status=='verified'){
                const percentage = (result.investment*20)/100
                const perDayBalance = percentage/30;
                await User.updateOne({email:result.email},{subscription:'yes',perDayProfit:perDayBalance,level:result.level})
                let user = await User.findOne({email:result.email})
                
                try{
                  if(user.invite!=""){
                    let u = await  User.findOne({_id:user.invite})
                    
                    console.log(req.query._id)
                    console.log(u.teams[0]['direct'].id)
                    for(let i=0;i<u.teams.length;i++)
                    {
                        if(u.teams[i]['direct'].id==req.query._id)
                        {
                            
                            await User.findOne({_id:user.invite},{$set:{[`teams${i}.direct.plan`]:'yes'}})
                        }else if(u.teams[i]['indirect'].id==req.query._id)
                        {
                            await User.findOne({_id:user.invite},{$set:{[`teams${i}.indirect.plan`]:'yes'}})

                        }
                    }
                }
                     //   mail('1','2','3','4','5','6');
                       res.status(200).send({'success':true})
                }catch(e){
                       res.status(200).send({'success':true})
               }
        }else{ 
                await User.updateOne({email:result.email},{subscription:'no'})
                res.status(200).send({'success':true})
        }
   
}

  
  
export default   ConnectMongoDB(handler)