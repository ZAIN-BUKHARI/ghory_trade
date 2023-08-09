import ConnectMongoDB from '../../../middleware/mongoose'
import Product from '../../../models/Product'

const handler= async (req, res)=> {
    let product=await Product.find()
    res.status(200).send({product})
    
}
  
  
  
export default   ConnectMongoDB(handler)