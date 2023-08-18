import ConnectMongoDB from '../../../middleware/mongoose'
import Plan from '../../../models/Plan'

const handler= async (req, res)=> {
    let orders = await Plan.find()
    res.status(200).send({orders})
}
  
  
  
export default   ConnectMongoDB(handler)