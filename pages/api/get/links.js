import ConnectMongoDB from '../../../middleware/mongoose'
import Video from '../../../models/Video'

const handler= async (req, res)=> {
    
    let links = await Video.find()
    res.status(200).send({links})
        
    
}
  
  
  
export default   ConnectMongoDB(handler)