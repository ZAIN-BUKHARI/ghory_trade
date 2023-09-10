import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'

const handler= async (req, res)=> {
    if(req.method=='POST'){
        const {Userid} = req.body
        let user = await User.findOne({_id:Userid})
        
        for(let i=0;i<user.teams.length;i++)
        {
        if(user.teams[i]['direct'].plan=='yes' || user.teams[i]['indirect'].plan=='yes')
        {
           let one = user.balance;
           let two = user.teams[i]['direct'].investment
           let three = user.teams[i]['indirect'].investment

           const totalInvestment = one + two + three;
           if(totalInvestment>=50000)
               res.status(200).json({success:true})
            else
            res.status(200).json({success:false})
        }
        else
            res.status(200).json({success:'no'})        
    
    }
       res.status(200).json({msg:"giving ranks "})
        


    }
else{

    res.status(200).json({ error : 'request method is incorrect it should be post' })
}
  }
  
  
  
  export default   ConnectMongoDB(handler)