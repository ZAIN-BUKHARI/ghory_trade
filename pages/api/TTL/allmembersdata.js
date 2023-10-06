import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'

const handler= async (req, res)=> {
    if(req.method=='POST'){
        let user = await User.findOne({email:req.body.email})
        let members = []
        for(let i=0;i<user.teams.length;i++)
        {   
            let direct = user.teams[i]['direct'].id
            let indirect = user.teams[i]['indirect'].id
            if(user.teams[i]['direct'].id!='')
            {
                let u = await User.findOne({_id:direct})
                members.push(u)
            }
            if(user.teams[i]['indirect'].id!='')
            {
                let u = await User.findOne({_id:indirect})
                members.push(u)
            }
        }
        res.status(200).json({members})
    }
   
}
  
  
  
export default   ConnectMongoDB(handler)