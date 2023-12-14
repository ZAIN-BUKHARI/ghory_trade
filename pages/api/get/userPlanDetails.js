import ConnectMongoDB from '../../../middleware/mongoose'
import Plan from '../../../models/Plan'

const handler= async (req, res)=> {
    if(req.method=='POST'){
            let plan = await Plan.find({email:req.body.email})
            res.status(200).send({success:true,plan})
        
    }
    
}
  
  
  
export default   ConnectMongoDB(handler)