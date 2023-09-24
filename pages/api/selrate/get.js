import ConnectMongoDB from '../../../middleware/mongoose'
import Selrate from '../../../models/Selrate'

const handler= async (req, res)=> {
    if(req.method=='GET'){   
       try{ 
            let rate = await Selrate.findOne()   
            if(rate)    res.status(200).json({ rate })
           
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