import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'

const handler= async (req, res)=> {
    if(req.method=='POST'){
        const {email} = req.body
        let user = await User.findOne({email})
        let views= user.views;
        if(views>=0 && views<=10){
            views++;
        }
        await User.updateOne({email:email},{views:views})
        res.status(200).send({success:true})   
    }
}
  
  
  
export default   ConnectMongoDB(handler)


