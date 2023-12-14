import ConnectMongoDB from '../../../middleware/mongoose'
import Sell from '../../../models/Sell'

const handler= async (req, res)=> {
    if(req.method=='GET'){   
       try{ 
            let sell = await Sell.findOne() 
            if(sell)   res.status(200).json( {sell:sell.sellRate}  )
           
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