import ConnectMongoDB from '../../../middleware/mongoose'
import Sell from '../../../models/Sell'

const handler= async (req, res)=> {
    if(req.method=='POST'){   
        try{ 
        let sell = await Sell.findOneAndUpdate({},{sellRate:req.body.sellRate})
        await sell.save()   
        res.status(200).json({success:true})
           
       }
       catch(error){
        res.status(200).json({ error:'server error catch ' })
       }
}
else{

    res.status(200).json({ error : 'this method is not defined' })
}
  }
  
  
  
  export default   ConnectMongoDB(handler)