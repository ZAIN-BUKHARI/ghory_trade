import ConnectMongoDB from '../../../middleware/mongoose'
import Product from '../../../models/Product'

const handler= async (req, res)=> {
    const {search}=req.body
    let product = await Product.findOne({search})
    res.status(200).send({product})
}
  
  
  
export default   ConnectMongoDB(handler)