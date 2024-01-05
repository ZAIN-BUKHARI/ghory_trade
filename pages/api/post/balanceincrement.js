import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'
import Plan from '../../../models/Plan'

const handler= async (req, res)=> {
    if(req.method=='POST'){

        const {Userid} = req.body
        try{
        let user = await User.findOne({_id:Userid})
        if(user.invite=="" && user.subscription=='yes')// this means leader has done his dailywork so no commission
        {
            await User.updateOne({_id:Userid},{
              $inc:{balance:user.perDayProfit},
                todaywork:'yes',
                views:0,
            }) 
            res.status(200).json({success:true})
       }else{
        let Leader = await User.findOne({_id:user.invite})

        //user && direct
        if(Leader.invite=="") // direct
        {
            if(Leader.Rank=="no" && Leader.subscription=='yes') // tested
            {
                let FivePercent = ((user.perDayProfit*5)/100);
                await User.updateOne({_id:Leader._id},{
                  $inc:{ 
                        balance:FivePercent, 
                        commission:FivePercent
                      }})
                await User.updateOne({_id:Userid},{
                   $inc:{balance:user.perDayProfit},
                    todaywork:'yes',
                    views:0
                })
                res.status(200).json({success:true})
            }
            else
            {   
                await User.updateOne({_id:Userid},{
               $inc:{ balance:user.perDayProfit},
                todaywork:'yes',
                views:0
            }) 
            res.status(200).json({success:true})
            }
        }
        else 
        {
            //user && direct && indirect
            let SubLeader = await User.findOne({_id:Leader.invite})//Indirect  Doc
            if(Leader.Rank=="no" && SubLeader.Rank=="no" && Leader.subscription=='yes' && SubLeader.subscription=='yes') //tested
            {
                //add comission to both 5% direct and 3% indirect from user perdayprofit
                let FivePercent = ((user.perDayProfit*5)/100);// 0.0333333333333
                let UserCurrentpdp = user.perDayProfit - FivePercent //0.633333333333
                let ThreePercent = ((UserCurrentpdp*3)/100); //0.019
                // const finalUserPerdayProfit = UserCurrentpdp - ThreePercent //0.614333333333

                await User.updateOne({_id:Leader._id},
                    {
                       $inc:{
                            balance:FivePercent,
                            commission:FivePercent
                           },
                    })
               
                await User.updateOne({_id:SubLeader._id},
                    {
                      $inc:
                      { balance:ThreePercent,
                        commission:ThreePercent
                      }
                    }) 
               
                await User.updateOne({_id:Userid},
                    {
                     $inc:
                        { 
                        balance:user.perDayProfit,
                    },
                    todaywork:'yes',
                    views:0
                    })
            }
            else if(Leader.Rank=="no" && Leader.subscription=='yes' && SubLeader.Rank!="no" || SubLeader.subscription=='no')  //tested
            {
                //commsiion should be add to direct check bottom to top  user -> direct -> indirect and indirect must be leader of the team
                let FivePercent = ((user.perDayProfit*5)/100);

                await User.updateOne({_id:Leader._id},{
                   $inc:{
                       balance:FivePercent,
                       commission:FivePercent
                   }
                })

                await User.updateOne({_id:Userid},{
                    $inc:{balance:user.perDayProfit},
                    todaywork:'yes',views:0
                })
            }
            else if(SubLeader.Rank=="no" && SubLeader.subscription=='yes' && Leader.Rank!="no" || Leader.subscription=='no' ) //tested
            {
                let ThreePercent = ((user.perDayProfit*3)/100);
                
                await User.updateOne({_id:SubLeader._id},
                    {
                        $inc:{    
                            balance:ThreePercent,
                            commission:ThreePercent
                        }
                    }) 

                await User.updateOne({_id:Userid},{
                    $inc:{ balance:user.perDayProfit},
                    todaywork:'yes',views:0
                })
            }
            else{

                await User.updateOne({_id:Userid},{
                   $inc:{ balance:user.perDayProfit},
                    todaywork:'yes',
                    views:0
                }) 
            }
            res.status(200).json({success:true})
        }
        
    res.status(200).json({success:true})
    
}//else
}
catch(e)
{
    res.status(200).json({success:false})
}
}


}
  
  
export default   ConnectMongoDB(handler)


