import ConnectMongoDB from '../../middleware/mongoose'
import Product from '../../models/Product'

const handler= async (req, res)=> {
    let products = await Product.find()
    res.status(200).send({products})
}
  
  
  
export default   ConnectMongoDB(handler)