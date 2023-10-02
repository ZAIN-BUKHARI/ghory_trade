import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'

const handler= async (req, res)=> {
    if(req.method=='POST'){
        await User.updateOne({_id:''},
        {
        YearPlan:[
            "23/10/2023",
            "23/11/2023",
            "23/12/2023",
            "23/01/2024",
            "23/02/2024",
            "23/03/2024",
            "23/04/2024",
            "23/05/2024",
            "23/06/2024",
            "23/07/2024",
            "23/08/2024",
            "23/09/2024"
          ]
    })
        //chohan

        res.status(200).json(true)
    }
    
}
  
  
  
export default   ConnectMongoDB(handler)