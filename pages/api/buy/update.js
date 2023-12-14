import ConnectMongoDB from '../../../middleware/mongoose'
import Buy from '../../../models/Buy'

const handler= async (req, res)=> {
    if(req.method=='POST'){   
        try{ 
        let buy = await Buy.findOneAndUpdate({},{buyRate:req.body.buyRate})
        await buy.save()   
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