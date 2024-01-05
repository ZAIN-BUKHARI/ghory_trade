import ConnectMongoDB from '../../../middleware/mongoose'
import Video from '../../../models/Video'

const handler= async (req, res)=> {
    
    try{
        let links = await Video.find()
        res.status(200).send({links,success:true})
    }catch(e)
    {
        res.status(200).send({success:false})
    }   
    
}
  
  
  
export default   ConnectMongoDB(handler)