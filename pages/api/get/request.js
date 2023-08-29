import ConnectMongoDB from '../../../middleware/mongoose'
import Request from '../../../models/Request'

const handler= async (req, res)=> {
     console.log('Hit')
    if(req.query.status=="verified"){
        let orders = await Request.find({status:"verified"})
        res.status(200).send({orders})
    }
    else if(req.query.status=="pending"){
        console.log(req.query.status)
        let orders = await Request.find({status:"pending"})
        res.status(200).send({orders})
    }
    else if(req.query.status=="rejected"){
        let orders = await Request.find({status:"rejected"})
        res.status(200).send({orders})
    }
}
  
  
  
export default   ConnectMongoDB(handler)