import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'

const handler= async (req, res)=> 
{
    if(req.method=='POST')
    {
        const {Userid} = req.body
        let user = await User.findOne({_id:Userid});
        let RankAmount = user.balance;
        for(let i=0;i<user.teams.length;i++)
        { 
            if(user.teams[i].Rank!="no")
            {
                if(user.teams[i].Rank=='GM')
                RankAmount = RankAmount + 100
                else if(user.teams[i].Rank=='VP')
                RankAmount = RankAmount + 200
                else if(user.teams[i].Rank=='SVP')
                RankAmount = RankAmount + 300
                else if(user.teams[i].Rank=='ED')
                RankAmount = RankAmount + 400
                else if(user.teams[i].Rank=='MD')
                RankAmount = RankAmount + 500
            }
        }
                await User.updateOne({_id:id},{balance:RankAmount})
                res.status(200).json({msg:'increment '})

    }

    else
        res.status(200).json({ error : 'request method is incorrect it should be post' })
}
  
  
  
  export default   ConnectMongoDB(handler)