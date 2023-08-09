import ConnectMongoDB from '../../../middleware/mongoose'
import Order from '../../../models/Order'
import Product from '../../../models/Product'

const handler= async (req, res)=> {
 
    let allOrder=await Order.find()
    let allproduct=await Product.find()
    res.status(200).send({allOrder,allproduct})
    
}
  
  
  
export default   ConnectMongoDB(handler)