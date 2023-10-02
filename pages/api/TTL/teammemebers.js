import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'

const handler= async (req, res)=> {
    if(req.method=='POST'){
        const {Userid}=req.body
        let user = await User.findOne({_id:Userid})
        let members=[];
        for(let i=0;i<user.teams.length;i++)
        {
            if(user.teams[i]['direct'].plan=='yes')
                members.push(user.teams[i]['direct'].id.toString())
            if(user.teams[i]['indirect'].plan=='yes')
                members.push(user.teams[i]['indirect'].id.toString())
        }
        let users=[]
        for(let i=0;i<members.length;i++)
        {
            let u = await User.findOne({_id:members[i]})
        }
        res.status(200).json('true')

    }
}
  
  
  
export default   ConnectMongoDB(handler)