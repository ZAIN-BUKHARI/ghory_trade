import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'
import Plan from '../../../models/Plan'

const handler= async (req, res)=> {
    if(req.method=='POST'){

        const {Userid} = req.body
        let user = await User.findOne({_id:Userid})
        if(user.invite=="")
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
            if(Leader.Rank=="no")
            {
                let pdp = user.perDayProfit;
                let FivePercent = ((pdp*5)/100);
                const balance= FivePercent+Leader.balance
                await User.updateOne({_id:Leader._id},{balance:balance})
                await User.updateOne({_id:Userid},{balance:(user.balance+(pdp-FivePercent)),todaywork:'yes',views:0})
                res.status(200).json({success:true})

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
            let SubLeader = await User.findOne({_id:Leader.invite})
            if(Leader.Rank=="no" && SubLeader.Rank=="no")
            {
                let FivePercent = ((user.perDayProfit*5)/100);// 0.0333333333333
                let UserCurrentpdp = user.perDayProfit - FivePercent //0.633333333333
                let ThreePercent = ((UserCurrentpdp*3)/100); //0.019
                const finalUserProgitPerday = UserCurrentpdp - ThreePercent //0.614333333333

                let balance = FivePercent + Leader.balance
                await User.updateOne({_id:Leader._id},{balance})
                await User.updateOne({_id:Userid},{balance:UserCurrentpdp,todaywork:'yes',views:0})
                
                balance = ThreePercent + SubLeader.balance; 
                await User.updateOne({_id:SubLeader._id},{balance}) 
                await User.updateOne({_id:Userid},{balance:finalUserProgitPerday,todaywork:'yes',views:0})
            }
            else if(Leader.Rank=="no" && SubLeader.Rank!="no")
            {
                let FivePercent = ((user.perDayProfit*5)/100);// 0.0333333333333
                let UserCurrentpdp = (user.balance+(user.perDayProfit - FivePercent)) //0.633333333333
                let balance = FivePercent + Leader.balance
                await User.updateOne({_id:Leader._id},{balance})
                await User.updateOne({_id:Userid},{balance:UserCurrentpdp,todaywork:'yes',views:0})
            }
            else if(Leader.Rank!="no" && SubLeader.Rank=="no")
            {
                let ThreePercent = ((user.perDayProfit*3)/100); //0.019
                const finalUserProgitPerday = (user.balance+(user.perDayProfit - ThreePercent)) //0.614333333333
                const balance = ThreePercent + SubLeader.balance; 
                await User.updateOne({_id:SubLeader._id},{balance}) 
                await User.updateOne({_id:Userid},{balance:finalUserProgitPerday,todaywork:'yes',views:0})
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


