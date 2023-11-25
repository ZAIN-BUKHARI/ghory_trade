import ConnectMongoDB from '../../../middleware/mongoose'
import Send from '../../../models/Send'

const handler= async (req, res)=> {
        let send = await Send.find()
        res.status(200).send({send})
    
}
  
  
  
export default   ConnectMongoDB(handler)