import ConnectMongoDB from '../../../middleware/mongoose'
import Request from '../../../models/Request'
import User from '../../../models/Request'
import Plan from '../../../models/Request'

const handler= async (req, res)=> {
        
    console.log(req.query._id)
        if(req.query.model=='request')
        {
            console.log('req')
            let result = await Request.findOneAndDelete({_id:req.query._id})
            res.status(200).send({'success':true})
        }
        else if(req.query.model=='plan')
        {
            console.log('plan')
            let result = await Plan.findOneAndDelete({_id:req.query._id})
            res.status(200).send({'success':true})
        }
        else if(req.query.model=='user')
        {
            console.log('user')
            let result = await User.deleteOne({_id:req.body._id})
            res.status(200).send({'success':true})
        }
   
}
  
  
  
export default   ConnectMongoDB(handler)