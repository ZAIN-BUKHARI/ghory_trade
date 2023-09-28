import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'
import Plan from '../../../models/Plan'

const handler= async (req, res)=> {
    if(req.method=='POST'){
        const {email} = req.body
        console.log(email)
        let user = await User.findOne({email})
        let totalInvestment=0;
        
        for(let i=0;i<user.teams.length;i++)
        {
            totalInvestment += user.teams[i]['direct'].investment + user.teams[i]['indirect'].investment
        }
    

        let plan = await Plan.findOne({_id:user.planId})
        totalInvestment +=plan.investment;
        res.status(200).json({investment:totalInvestment})
    }
}
  
  
  
export default   ConnectMongoDB(handler)