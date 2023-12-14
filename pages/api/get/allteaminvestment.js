import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'

const handler= async (req, res)=> {
    
    if(req.method=='POST'){
        const {email} = req.body
        try{
        let user = await User.findOne({email})
        let investment=0;
        let directteam=0;
        let indirectteam=0;
        
        for(let i=0;i<user.teams.length;i++)
        {
            investment += user.teams[i]['direct'].investment + user.teams[i]['indirect'].investment
            directteam += user.teams[i]['direct'].investment;
            indirectteam += user.teams[i]['indirect'].investment;
        }
       const data ={
        investment:investment,
        directteam:directteam,
        indirectteam:indirectteam,
       }

        res.status(200).json(
            {
                data:data,
                success:true
            })
    }catch(e)
    {
        res.status(200).json({investment:0})

    }
    }
}
  
  
  
export default   ConnectMongoDB(handler)