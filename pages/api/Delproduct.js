import ConnectMongoDB from '../../middleware/mongoose'
import Product from '../../models/Product'

const handler= async (req, res)=> {
    if(req.method=='DELETE'){
        try{
            console.log(req.body.delslug)
            await Product.findOneAndDelete({slug:req.body.delslug})
           res.status(200).send({success:true})
        }
        catch(error){
            
            res.status(201).send({error})
        }
    
    
}
else{
    res.status(400).send({error:"use del request"})

}
}
  
  
  
export default   ConnectMongoDB(handler)