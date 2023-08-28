import ConnectMongoDB from '../../../middleware/mongoose'
import Plan from '../../../models/Plan'

const handler= async (req, res)=> {
    
        let plan = await Plan.find()
        res.status(200).send({plan})
    
}
  
  
  
export default   ConnectMongoDB(handler)