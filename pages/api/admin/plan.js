import ConnectMongoDB from '../../../middleware/mongoose'
import Plan from '../../../models/Plan'

const handler= async (req, res)=> {
    try{

        if(req.method=='GET'){  
            let result = await Plan.findOne({_id:req.query._id})
            res.status(200).send({success:true,result})
        }
        
    }catch(e){
        res.status(200).send({error:'server error'})

    }
   
}
  
  
  
export default   ConnectMongoDB(handler)