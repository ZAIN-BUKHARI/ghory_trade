import ConnectMongoDB from '../../../middleware/mongoose'
import Plan from '../../../models/Plan'

const handler= async (req, res)=> {
    
        let result = await Plan.findById({_id:req.query._id})
        await result.save()
        res.status(200).send({'success':true,result})
   
}
  
  
  
export default   ConnectMongoDB(handler)