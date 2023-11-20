import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'

const handler= async (req, res)=> {
    if(req.method=='GET'){
        try{

            let u = await User.findOne({_id:req.query.id})
            res.status(200).json({firstname:u.firstname,lastname:u.lastname,success:true})
        }catch(e)
        {
            res.status(200).json({error:'Network Error'})

        }
    }
}
  
  
  
export default   ConnectMongoDB(handler)