import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'

const handler= async (req, res)=> {
    let user;
    if(req.method=='POST'){
        const {Userid} = req.body
         user = await User.findOne({_id:Userid})
        for(let i=0;i<user.teams.length;i++)
        {
          user = await User.findOne({_id:Userid})
            let directbalance=0;
            let indirectbalance=0;
            let totalSalary=0;

            const fivePercentSalary  = (user.teams[i]['direct'].investment*5/100)
            const threePercentSalary = (user.teams[i]['indirect'].investment*3/100)
            
        if(user.teams[i]['direct'].plan=='yes')
            directbalance = fivePercentSalary;//5%
        if(user.teams[i]['indirect'].plan=='yes')
            indirectbalance = threePercentSalary; //3%
        
        totalSalary = user.balance + directbalance + indirectbalance
        await User.updateOne({_id:user._id},{balance:totalSalary})
        }
    

       res.status(200).json({success:true})
        


    }
else{

    res.status(200).json({ error : 'request method is incorrect it should be post' })
}
  }
  
  
  
  export default   ConnectMongoDB(handler)