import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'

const handler= async (req, res)=> {
    if(req.method=='GET'){
        try{
        if(req.query.email){
            let user = await User.findOne({email:req.query.email})
            res.status(200).send({success:true,user})
        }else{
            let user = await User.findOne({_id:req.query._id})
            res.status(200).send({success:true,user})
        }
    }catch(e)
    {
        res.status(200).send({success:false})

    }
    }
    
}
  
  
  
export default   ConnectMongoDB(handler)