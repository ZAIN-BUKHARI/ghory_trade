import ConnectMongoDB from '../../../middleware/mongoose'
import Send from '../../../models/Send'

const handler= async (req, res)=> {
    if(req.method=='GET'){
        let u = await Send.find({receiveraddress:req.query.id})
        
        res.status(200).json({receives:u})
    }
}
  
  
  
export default   ConnectMongoDB(handler)