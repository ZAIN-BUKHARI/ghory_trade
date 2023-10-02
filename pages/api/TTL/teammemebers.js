import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'

const handler= async (req, res)=> {
    if(req.method=='POST'){
        const {email}=req.body
        let user = await User.findOne({email:email})
        let members=[];
        let u='';
        for(let i=0;i<user.teams.length;i++)
        {
            u = user.teams[i]['direct'].id.toString()
            if(user.teams[i]['direct'].plan=='yes')
            {
                let user = await User.findOne({_id:u})
                members.push({email:user.email})
            }
            u = user.teams[i]['indirect'].id.toString()
            if(user.teams[i]['indirect'].plan=='yes')
            {
                let user = await User.findOne({_id:u})
                members.push({email:user.email})
            }
        }
        res.status(200).json({members})

    }
}
  
  
  
export default   ConnectMongoDB(handler)