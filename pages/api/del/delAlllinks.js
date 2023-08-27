import ConnectMongoDB from '../../../middleware/mongoose'
import Video from '../../../models/Video'

const handler= async (req, res)=> {
    if(req.method=='DELETE'){
        await Video.deleteMany()
        res.status(200).send({success:true})
    }
}
  
  
  
export default   ConnectMongoDB(handler)