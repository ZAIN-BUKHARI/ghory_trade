import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'
import Plan from '../../../models/Plan'

const handler= async (req, res)=> {
    
       let p =  await Plan.updateOne({email:"ghoryg7@gmail.com"},{name:"no"})
        
            console.log(p)
        res.status(200).json({success:true})
    
    
}
  
  
  
export default   ConnectMongoDB(handler)