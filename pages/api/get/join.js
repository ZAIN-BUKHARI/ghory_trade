import ConnectMongoDB from '../../../middleware/mongoose'
import Plan from '../../../models/Plan'

const handler= async (req, res)=> {
    if(req.query.status=="verified"){
        let orders = await Plan.find({status:"verified"})
        res.status(200).send({orders})
    }
    else if(req.query.status=="pending"){
        let orders = await Plan.find({status:"pending"})
        res.status(200).send({orders})
    }
    else if(req.query.status=="rejected"){
        let orders = await Plan.find({status:"rejected"})
        res.status(200).send({orders})
    }
}
  
  
  
export default   ConnectMongoDB(handler)