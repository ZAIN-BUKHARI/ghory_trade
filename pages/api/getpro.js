import ConnectMongoDB from '../../middleware/mongoose'
import Product from '../../models/Product'
// import Tshirts from '../Tshirts';

const handler= async (req, res)=> {
    let {page,limit}=req.query;
    if(!page) page=1;
    if(!limit) limit=1;
    const skip= (page-1)*2
    const pro = await Product.find({category:'tshirt'}).skip(skip).limit(limit)
    
    res.status(200).send(pro)
    
}
  
  
  
export default   ConnectMongoDB(handler)