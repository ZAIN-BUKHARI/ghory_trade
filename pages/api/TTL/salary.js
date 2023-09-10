import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'

const handler= async (req, res)=> {
    if(req.method=='POST'){
        const {Userid} = req.body
        let user = await User.findOne({_id:Userid})
        
        for(let i=0;i<user.teams.length;i++)
        {
        if(user.teams[i]['direct'].plan=='yes')
        {
           let Fivepercent =(user.teams[i]['direct'].investment*5)/100; //5%
           const BALANCE = user.balance + Fivepercent; //5%
           let user = await User.updateOne({_id:user._id},{balance:BALANCE})
        }else if(user.teams[i]['indirect'].plan=='yes'){
            let Threepercent = (user.teams[i]['indirect'].investment*3)/100; //3%
           const BALANCE = user.balance + Threepercent; //3%
           let user = await User.updateOne({_id:user._id},{balance:BALANCE})
        }
        
        }
    

       res.status(200).json({success:true})
        


    }
else{

    res.status(200).json({ error : 'request method is incorrect it should be post' })
}
  }
  
  
  
  export default   ConnectMongoDB(handler)