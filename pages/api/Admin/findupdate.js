import ConnectMongoDB from '../../../middleware/mongoose'
import Product from '../../../models/Product'

const handler= async (req, res)=> {
    const {slug}=req.body
    let product = await Product.findOne({slug})
    res.status(200).send({product})
    
    
}
  
  
  
export default   ConnectMongoDB(handler)