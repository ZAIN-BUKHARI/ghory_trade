import ConnectMongoDB from '../../../middleware/mongoose'
import Test from '../../../models/Test'

const handler= async (req, res)=> {
    if(req.method=='POST'){   
       
            let rate = new Test({
                Selrate:100,
            })
            await rate.save()             
            res.status(200).json({ success:true })
           
       }
      


  }
  
  
  
  export default   ConnectMongoDB(handler)