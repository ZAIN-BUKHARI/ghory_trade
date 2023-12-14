import ConnectMongoDB from '../../../middleware/mongoose'
import Plan from '../../../models/Plan'

const handler= async (req, res)=> {
    await Plan.deleteMany()
    res.status(200).send({success:true})
}
  
  
  
export default   ConnectMongoDB(handler)