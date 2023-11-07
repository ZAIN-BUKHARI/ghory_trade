import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'

const handler= async (req, res)=> {
    if(req.method=='POST'){
        const {email} = req.body
        try{

        
        let user = await User.findOne({email})
        let investment=0;
        
        for(let i=0;i<user.teams.length;i++)
        {
            investment += user.teams[i]['direct'].investment + user.teams[i]['indirect'].investment
        }
    

        res.status(200).json({investment:investment,success:true})
    }catch(e)
    {
        res.status(200).json({investment:0})

    }
    }
}
  
  
  
export default   ConnectMongoDB(handler)