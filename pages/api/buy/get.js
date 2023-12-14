import ConnectMongoDB from '../../../middleware/mongoose'
import Buy from '../../../models/Buy'

const handler= async (req, res)=> {
    if(req.method=='GET'){   
       try{ 
            let buy = await Buy.findOne()   
            console.log(buy.buyRate)
            if(buy)    res.status(200).json({buy:buy.buyRate} )
           
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