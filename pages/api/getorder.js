import ConnectMongoDB from '../../middleware/mongoose'
import Order from '../../models/Order'

const handler= async (req, res)=> {
    let orders = await Order.find()
    res.status(200).send({orders})
    console.log(orders)
}
  
  
  
export default   ConnectMongoDB(handler)