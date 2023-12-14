import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'
import Plan from '../../../models/Plan'

const handler= async (req, res)=> {
    
       let p =  await User.updateOne({email:"Arslanmasood9800@gmail.com"},{
       $push:{ YearPlan:["22/10/2023",
        "22/11/2023",
        "22/12/2023",
        "22/01/2024",
        "22/02/2024",
        "22/03/2024",
        "22/04/2024",
        "22/05/2024",
        "22/06/2024",
        "22/07/2024",
        "22/08/2024",
        "22/09/2024",
        "22/10/2024"]
    }})
        
            console.log(p)
        res.status(200).json({success:true})
    
    
}
  
  
  
export default   ConnectMongoDB(handler)