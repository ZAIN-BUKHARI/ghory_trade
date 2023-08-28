import ConnectMongoDB from '../../../middleware/mongoose'
import Request from '../../../models/Request'

const handler= async (req, res)=> {
        
        let result = await Request.findById({_id:req.query._id})
        await result.save()
        res.status(200).send({'success':true,result})
   
}
  
  
  
export default   ConnectMongoDB(handler)