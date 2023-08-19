import ConnectMongoDB from '../../../middleware/mongoose'
import Link from '../../../models/Link'

const handler= async (req, res)=> {
    await Link.deleteMany()
    res.status(200).send({success:true})
}
  
  
  
export default   ConnectMongoDB(handler)