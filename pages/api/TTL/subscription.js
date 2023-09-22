import ConnectMongoDB from '../../../middleware/mongoose'
import Plan from '../../../models/Plan'
import User from '../../../models/User'

const handler= async (req, res)=> {
    const end = new Date();
        const yyyyy = end.getFullYear();
        let mmm = end.getMonth() + 1; // Months start at 0!
        let ddd = end.getDate();

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
                const plan_date = CurrentDate.slice(6,10) 
                const plan_enddate = plan.enddate.slice(6,10) 
                if(parseInt(CurrentDate)>=parseInt(plan.enddate) && parseInt(plan_date) >= parseInt(plan_enddate))
                {
                    await Plan.findByIdAndDelete({_id:plan._id}); 
                    let u = await User.updateOne({email:req.body.email},{subscription:'no'})
                    if(u)
                    {
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