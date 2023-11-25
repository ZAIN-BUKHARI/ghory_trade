import ConnectMongoDB from '../../../middleware/mongoose'
import Request from '../../../models/Request'

const handler= async (req, res)=> {
        let request = await Request.find()
        res.status(200).send(request)
    
}
  
  
  
export default   ConnectMongoDB(handler)