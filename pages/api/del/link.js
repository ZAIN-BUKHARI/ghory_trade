import ConnectMongoDB from '../../../middleware/mongoose'
import Video from '../../../models/Video'

const handler= async (req, res)=> {
    if(req.method=='GET'){
        const {del} = req.query
        await Video.deleteOne(del)
        res.status(200).send({success:true})
    }
}
  
  
  
export default   ConnectMongoDB(handler)