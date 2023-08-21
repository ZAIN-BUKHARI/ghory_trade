import ConnectMongoDB from '../../../middleware/mongoose'
import Plan from '../../../models/Plan'
import User from '../../../models/User'


const handler= async (req, res)=> {
    
        let result = await Plan.findByIdAndUpdate({_id:req.query._id},{status:req.query.status})
        await result.save()
        if(result && req.query.status=='verified'){
                await User.updateOne({email:result.email},{subscription:'yes'})
                
        }else{
                await User.updateOne({email:result.email},{subscription:'no'})
                res.status(200).send({'success':true})
        }
   
}

  
  
export default   ConnectMongoDB(handler)