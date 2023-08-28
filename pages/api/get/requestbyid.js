import ConnectMongoDB from '../../../middleware/mongoose'
import Request from '../../../models/Request'

const handler= async (req, res)=> {
    if(req.method=='GET'){
            let result = await Request.findOne({_id:req.query._id})
            res.status(200).send({success:true,result})
        
    }
    
}
  
  
  
export default   ConnectMongoDB(handler)