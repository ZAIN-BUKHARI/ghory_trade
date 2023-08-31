import ConnectMongoDB from '../../../middleware/mongoose'
import Video from '../../../models/Video'

const handler= async (req, res)=> {
    
    let links = await Video.find()
    links.reverse()
    res.status(200).send({links})
        
    
}
  
  
  
export default   ConnectMongoDB(handler)