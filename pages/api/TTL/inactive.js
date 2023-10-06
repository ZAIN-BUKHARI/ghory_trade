import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'

const handler= async (req, res)=> {
    if(req.method=='POST'){
        const {email}=req.body
        let user = await User.findOne({email:email})
        let inactive=[];
        let u='';
        for(let i=0;i<user.teams.length;i++)
        {
            u = user.teams[i]['direct'].id.toString()
            if(user.teams[i]['direct'].plan=='no')
            {
                let user = await User.findOne({_id:u})
                inactive.push({email:user.email})
            }
            u = user.teams[i]['indirect'].id.toString()
            if(user.teams[i]['indirect'].plan=='no')
            {
                let user = await User.findOne({_id:u})
                inactive.push({email:user.email})
            }
        }
        res.status(200).json({inactive})

    }
}
  
  
  
export default   ConnectMongoDB(handler)