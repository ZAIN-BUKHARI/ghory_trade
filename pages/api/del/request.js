import ConnectMongoDB from '../../../middleware/mongoose'
import Request from '../../../models/Request'

const handler= async (req, res)=> {
    await Request.deleteMany()
    res.status(200).send({success:true})
}
  
  
  
export default   ConnectMongoDB(handler)