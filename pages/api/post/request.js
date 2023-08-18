import ConnectMongoDB from '../../../middleware/mongoose'
import Request from '../../../models/Request'

const handler= async (req, res)=> {
    if(req.method=='POST'){
       try{ 
        let p = new Request({
            method:req.body.method,
            address:req.body.address,
            email:req.body.email,
            amount:req.body.amount
            
        })
         let a = await p.save()
        res.status(200).json({ success:a })
       }
       catch(error){
        res.status(200).json({ error:error })
       }
}
else{

    res.status(400).json({ error : 'this method is not defined' })
}
  }
  
  
  
  export default   ConnectMongoDB(handler)