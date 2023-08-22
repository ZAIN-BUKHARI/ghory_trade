import ConnectMongoDB from '../../../middleware/mongoose'
import Link from '../../../models/Link'

const handler= async (req, res)=> {
    
    let links = await Link.find()
    res.status(200).send({links})
}
  
  
  
export default   ConnectMongoDB(handler)