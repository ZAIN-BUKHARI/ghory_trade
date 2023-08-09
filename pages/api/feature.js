import ConnectMongoDB from '../../middleware/mongoose'
import Product from '../../models/Product'

const handler= async (req,res)=>{
    if(req.method=='GET'){
        let product = await Product.find({Feature:'F'}).limit(6)
        product.reverse()
        res.status(200).json({ product })

    }
   

}

export default   ConnectMongoDB(handler)