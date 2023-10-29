import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'
import Plan from '../../../models/Plan'
import { add } from 'date-fns'

const handler= async (req, res)=> {
    if(req.method=='POST'){

        const {Userid} = req.body
        let user = await User.findOne({_id:Userid})
        if(user.invite=="" && user.subscription=='yes')// this means leader has done his dailywork so no commission
        {
            const balance=user.balance+user.perDayProfit;
            await User.updateOne({_id:Userid},{
                balance:balance,
                todaywork:'yes',
                views:0,
            }) 
            res.status(200).json({success:true})
       }else{
        let Leader = await User.findOne({_id:user.invite})
        
        if(Leader.invite=="") // direct
        {
            if(Leader.Rank=="no" && Leader.subscription=='yes')
            {
                let pdp = user.perDayProfit;
                let FivePercent = ((pdp*5)/100);
                const balance= FivePercent+Leader.balance
                const leaderCommission= Leader.commission+FivePercent
                await User.updateOne({_id:Leader._id},{balance:balance,commission:leaderCommission})
                await User.updateOne({_id:Userid},{balance:(user.balance+(pdp-FivePercent)),
                    todaywork:'yes',views:0
                })
                res.status(200).json({success:true})
                //direct adding commsion to his leader
            }
            else
            {
                const balance=user.balance+user.perDayProfit;
                await User.updateOne({_id:Userid},{
                balance:balance,
                todaywork:'yes',
                views:0
            }) 
            res.status(200).json({success:true})
            }
        }
        else //indirect
        {
           
            let SubLeader = await User.findOne({_id:Leader.invite})//Indirect  Doc
            if(Leader.Rank=="no" && SubLeader.Rank=="no" && Leader.subscription=='yes' && SubLeader.subscription=='yes')
            {
                //add comission both direct and indirect
                let FivePercent = ((user.perDayProfit*5)/100);// 0.0333333333333
                let UserCurrentpdp = user.perDayProfit - FivePercent //0.633333333333
                let ThreePercent = ((UserCurrentpdp*3)/100); //0.019
                const finalUserProgitPerday = UserCurrentpdp - ThreePercent //0.614333333333

                let balance = FivePercent + Leader.balance
                const leaderCommission = Leader.commission+FivePercent
                await User.updateOne({_id:Leader._id},{balance,commission:leaderCommission})
               
                
                balance = ThreePercent + SubLeader.balance; 
                const subleaderCommission = SubLeader.commission+ThreePercent
                await User.updateOne({_id:SubLeader._id},{balance,commission:subleaderCommission}) 
                let u = await User.findOne({_id:Userid})
                u = user.balance + finalUserProgitPerday
                await User.updateOne({_id:Userid},{balance:u
                    ,todaywork:'yes',views:0
                })
            }
            else if(Leader.Rank=="no" && Leader.subscription=='yes' && SubLeader.Rank!="no" || SubLeader.subscription=='no')
            {
                //commsiion should be add to direct check bittom to top  user -> direct -> indirect and indirect must be leader
                let FivePercent = ((user.perDayProfit*5)/100);// 0.0333333333333
                let UserCurrentpdp = (user.balance+(user.perDayProfit - FivePercent)) //0.633333333333
                let balance = FivePercent + Leader.balance
                const leaderCommission = Leader.commission+FivePercent
                await User.updateOne({_id:Leader._id},{balance,commission:leaderCommission})
                let u = await User.findOne({_id:Userid})
                u = user.balance + UserCurrentpdp
                await User.updateOne({_id:Userid},{balance:u
                    ,todaywork:'yes',views:0
                })
            }
            else if(Leader.Rank!="no" || Leader.subscription=='no' && SubLeader.Rank=="no" && SubLeader.subscription=='yes')
            {
                let ThreePercent = ((user.perDayProfit*3)/100); //0.019
                const finalUserProgitPerday = (user.balance+(user.perDayProfit - ThreePercent)) //0.614333333333
                const balance = ThreePercent + SubLeader.balance; 
                const subleaderCommission = SubLeader.commission+ThreePercent
                await User.updateOne({_id:SubLeader._id},{balance,commission:subleaderCommission}) 
                let u = await User.findOne({_id:Userid})
                u = user.balance + finalUserProgitPerday
                await User.updateOne({_id:Userid},{balance:u
                    ,todaywork:'yes',views:0
                })
            }
            else{
                const balance=user.balance+user.perDayProfit;
                await User.updateOne({_id:Userid},{
                    balance:balance,
                    todaywork:'yes',
                    views:0
                }) 
            }
            res.status(200).json({success:true})
        }
        
    res.status(200).json({success:true})
    
}//else
}

}
  
  
export default   ConnectMongoDB(handler)


