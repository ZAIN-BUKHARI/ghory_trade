import ConnectMongoDB from '../../../middleware/mongoose'
import Link from '../../../models/Link'

const handler= async (req, res)=> {
    let orders = await Plan.Link()
    res.status(200).send({orders})
}
  
  
  
export default   ConnectMongoDB(handler)