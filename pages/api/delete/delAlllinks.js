import ConnectMongoDB from '../../../middleware/mongoose'
import Video from '../../../models/Video'

const handler= async (req, res)=> {
    if(req.method=='POST'){
        const id = req.body._id
        console.log(id)
        await Video.deleteOne({_id:id})
        res.status(200).send({success:true})
    }
}
  
  
  
export default   ConnectMongoDB(handler)