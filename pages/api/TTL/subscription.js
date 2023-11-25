import ConnectMongoDB from '../../../middleware/mongoose'
import Plan from '../../../models/Plan'
import User from '../../../models/User'

const handler= async (req, res)=> {
    console.log('helooooooooooooooooooooooo')
    const end = new Date();
        const yyyyy = end.getFullYear();
        let mmm = end.getMonth() + 1 ; // Months start at 0!
        let ddd = end.getDate() ;

        if (ddd < 10) ddd = '0' + ddd;
        if (mmm < 10) mmm = '0' + mmm;

        const CurrentDate= ddd + '/' + mmm + '/' + yyyyy;
    try {
        let user = await  User.findOne({email:req.body.email})
        if(user.subscription=='yes')
        {
            // let plan = await Plan.findOne({email:req.body.email});//before
            let plan = await Plan.findOne({_id:user.planId});
            if(plan)
            {
                const Current_month = CurrentDate.slice(3,5)
                const End_month =  plan.enddate.slice(3,5)
                const plan_date = CurrentDate.slice(6,10) 
                const plan_enddate = plan.enddate.slice(6,10) 
                
                if(parseInt(CurrentDate)>=parseInt(plan.enddate) && parseInt(plan_date) >= parseInt(plan_enddate) && parseInt(Current_month)>=parseInt(End_month))
                {
                    await Plan.findByIdAndDelete({_id:plan._id}); 
                    let u = await User.updateOne({email:req.body.email},{subscription:'no',planId:"",perDayProfit:0,todaywork:"no",views:0,Login:"yes",Rank:"no"})
                    if(u)
                    {
                        if(user.invite!='')
                        {
                            let leader = await User.findOne({_id:user.invite})
                            if(leader.invite=='')
                            {

                                for(let i=0;i<leader.teams.length;i++)
                                {
                                    let team = leader.teams[i]['direct'].id.toString()
                                    if(team==user._id.toString())
                                    {
                                        await User.findByIdAndUpdate(
                                            {_id:leader._id},
                                            {
                                                $set: {
                                                [`teams.${i}.direct.plan`]: "no",
                                                [`teams.${i}.direct.investment`]: 0,
                                                [`teams.${i}.direct.salaryDate`]: [],
                                                },
                                            }
                                            )
                                    }
                                }
                            }
                            else
                            {
                                let MainLeader = await User.findOne({_id:leader.invite})  
                                for(let i=0;i<MainLeader.teams.length;i++)//Main Leader indirect 
                                {
                                    let indirectteams = MainLeader.teams[i]['indirect'].id.toString()
                                    if(indirectteams==user._id.toString())
                                    {
                                        await User.findByIdAndUpdate(
                                            {_id:MainLeader._id},
                                            {
                                                $set: {
                                                [`teams.${i}.indirect.plan`]: "no",
                                                [`teams.${i}.indirect.investment`]: 0,
                                                [`teams.${i}.indirect.salaryDate`]: [],
                                                },
                                            }
                                            )
                                            break;
                                    }
                                }
                                for(let i=0;i<leader.teams.length;i++)//sub leader direct
                                {
                                let directteam = leader.teams[i]['direct'].id.toString()
                                if(directteam==user._id.toString())
                                {
                                        await User.findByIdAndUpdate(
                                            {_id:leader._id},
                                            {
                                                $set: {
                                                [`teams.${i}.direct.plan`]: "no",
                                                [`teams.${i}.direct.investment`]: 0,
                                                [`teams.${i}.direct.salaryDate`]: [],
                                                },
                                            }
                                            )
                                            break;
                                    }
                                }
                            }  
                        }
                        res.status(200).json({success:'subscription-end'})
                    }else
                    {
                    res.status(200).json({success:true})
                    }
                }else
                {
                    res.status(200).json({success:true})
                }
            }
            else{
                res.status(200).json({success:true})

            }
        }
        else{
            res.status(200).json({success:true})
        }
      } catch (error) {
        console.error('Error cleaning up documents:', error);
      }
}
  
  
  
export default   ConnectMongoDB(handler)