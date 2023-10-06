import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'

const handler= async (req, res)=> {
    if(req.method=='POST'){
        console.log('hittttttttttttttttttttt')
        console.log(req.body.email)
        let user = await User.findOne({email:req.body.email})
        console.log(user)
        let members = []
        for(let i=0;i<user.teams.length;i++)
        {   
            let direct = user.teams[i]['direct'].id
            let indirect = user.teams[i]['indirect'].id
            if(user.teams[i]['direct'].id!='no')
            {
                let u = await User.findOne({_id:direct})
                members.push(u)
            }
            if(user.teams[i]['indirect'].id!='no')
            {
                let u = await User.findOne({_id:indirect})
                members.push(u)
            }
        }
        res.status(200).json({members})
    }
   
}
  
  
  
export default   ConnectMongoDB(handler)