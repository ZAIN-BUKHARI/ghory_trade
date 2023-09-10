import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'

const handler= async (req, res)=> {
    if(req.method=='POST'){
        const {Userid}=req.body;
        let user = await User.findOne({_id:Userid})
        
        for(let i=0;i<user.teams.length;i++)
        {
        if(user.teams[i]['direct'].plan=='yes' || user.teams[i]['indirect'].plan=='yes')
        {
           const directInvestor = user.teams[i]['direct'].investment;
           const indirectInvestor = user.teams[i]['indirect'].investment;
           const userMaininvestor = user.balance;
           const TotalInvestment = directInvestor + indirectInvestor + userMaininvestor
           if(TotalInvestment>=50000 && TotalInvestment<1500000)
        {
            await  User.updateOne({_id:Userid},{$set:{[`teams.${i}.Rank`]:'GM'}})
            res.status(200).json({success:'GM'})
        }
        else if(TotalInvestment>=1500000 && TotalInvestment<500000)
        {
            await  User.updateOne({_id:Userid},{$set:{[`teams.${i}.Rank`]:'VP'}})
            res.status(200).json({success:'VP'})
        }
        else if(TotalInvestment>=500000 && TotalInvestment<2000000)
        {
            await  User.updateOne({_id:Userid},{$set:{[`teams.${i}.Rank`]:'SVP'}})
            res.status(200).json({success:'SVP'})
        }
        else if(TotalInvestment>=2000000 && TotalInvestment<6000000)
        {
            await  User.updateOne({_id:Userid},{$set:{[`teams.${i}.Rank`]:'MD'}})
            res.status(200).json({success:'MD'})
        }
        else if(TotalInvestment>=6000000 )
        {
            await  User.updateOne({_id:Userid},{$set:{[`teams.${i}.Rank`]:'ED'}})
            res.status(200).json({success:'ED'})
        }
        }
        
        }
    

       res.status(200).json({success:true})
        


    }
else{

    res.status(200).json({ error : 'request method is incorrect it should be post' })
}
  }
  
  
  
  export default   ConnectMongoDB(handler)