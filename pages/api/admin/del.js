import ConnectMongoDB from '../../../middleware/mongoose'
import Request from '../../../models/Request'
import User from '../../../models/Request'
import Plan from '../../../models/Request'

const handler= async (req, res)=> {
    
    // if(req.method=='DELETE')
    // {
    //     if(req.query.model=='request')
    //     {
    //         await Request.deleteOne({_id:req.query.Userid})
    //         res.status(200).send({'success':true})
    //     }
    //     else if(req.query.model=='plan')
    //     {
    //         await Plan.deleteOne({_id:req.query.Userid})
    //         res.status(200).send({'success':true})
    //     }
    //     else
    //     {
    //     console.log('HIT')

            let user =await User.de({email:"admin@"})
            user =await user.save()
            res.status(200).send({'success':true})
        // }
    // }
   
}
  
  
  
export default   ConnectMongoDB(handler)