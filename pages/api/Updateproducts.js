import ConnectMongoDB from '../../middleware/mongoose'
import Product from '../../models/Product'

const handler= async (req, res)=> {
    if(req.method=='POST'){
        for(let i=0;i<req.body.length;i++){
        let p = await Product.findByIdAndUpdate(req.body[i]._id,req.body[i])
        
        
    }
    res.status(200).json({ success:'updated'})
    }
    else{

        res.status(400).json({ error : 'this method is not defined' })
    }
  }
  
  
  
  export default   ConnectMongoDB(handler)