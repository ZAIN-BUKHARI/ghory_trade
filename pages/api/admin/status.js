import ConnectMongoDB from '../../../middleware/mongoose'
import Plan from '../../../models/Plan'

const handler= async (req, res)=> {
    
        let result = await Plan.findByIdAndUpdate({_id:req.query._id},{status:req.query.status})
        await result.save()
        res.status(200).send({'success':true})
   
}
  
  
  
export default   ConnectMongoDB(handler)