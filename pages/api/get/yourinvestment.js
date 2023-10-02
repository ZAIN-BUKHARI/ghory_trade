import ConnectMongoDB from '../../../middleware/mongoose'
import Plan from '../../../models/Plan'

const handler= async (req, res)=> {
    if(req.method=='POST')
    {
        try{
            let plan = await Plan.findOne({email:req.body.email})
            plan=plan.investment
            res.status(200).send({investment:plan,success:true})
        }catch(e)
        {
            res.status(200).send({error:false})
        }
    }
    
}
  
  
  
export default   ConnectMongoDB(handler)