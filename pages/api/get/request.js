import ConnectMongoDB from '../../../middleware/mongoose'
import Request from '../../../models/Request'

const handler= async (req, res)=> {
    let orders = await Request.find()
    res.status(200).send({orders})
}
  
  
  
export default   ConnectMongoDB(handler)