import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'

const handler= async (req, res)=> {
    if(req.method=='GET'){
        // let user = await User.updateOne({"teams.direct.id":'656b22b9bb08adca87fa6f60'},{commission:2})
        await User.updateMany({},{missProfits:[]})
        res.status(200).send({success:'true'})
    }
    
}
  
  
  
export default   ConnectMongoDB(handler)