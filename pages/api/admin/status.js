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
                
                // let emailaddressto;
                try{
                  if(user.invite!=""){
                    let u = await  User.findOne({_id:user.invite})
                    for(let i=0;i<u.teams.length;i++)
                    {
                        if(u.teams[i]['direct'].id.toString()==user._id.toString())
                        {
                            await User.findByIdAndUpdate({_id:user.invite},
                                {$set:{[`teams.${i}.direct.plan`]:'yes',[`teams.${i}.direct.investment`]:result.investment}
                                })

                        }
                        else if(u.teams[i]['indirect'].id.toString()==user._id.toString())
                        {
                            console.log('hit')
                            let user = await User.findOne({_id:req.query._id})
                            let direct = await User.findOne({_id:user.invite})
                            let indirect = await User.findOne({_id:direct.invite})
                            if(indirect.teams[i]['indirect'].id.toString()==user._id.toString())
                            {
                                await User.findByIdAndUpdate({_id:indirect.invite},
                                    {$set:{[`teams.${i}.indirect.plan`]:'yes',[`teams.${i}.indirect.investment`]:user.investment}
                                    })
                            }


                        }
                    }
                }
                    //    mail('1','2','3','4','5','6',emailaddressto);
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