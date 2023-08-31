import ConnectMongoDB from '../../../middleware/mongoose'
import Rate from '../../../models/Rate'

const handler= async (req, res)=> {
    if(req.method=='POST'){   
       try{ 
            let rate = new Rate({
                Rate:req.body.Rate,
            })
            await rate.save()             
            res.status(200).json({ success:true })
           
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