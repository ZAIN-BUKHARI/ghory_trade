import ConnectMongoDB from '../../../middleware/mongoose'
import Plan from '../../../models/Plan'

const handler= async (req, res)=> {
    
        let plan = await Plan.find()
        let investment=0;
        for(let i=0; i<plan.length;i++)
        {
            investment +=plan[i].investment
        }
        res.status(200).send({investment})
    
}
  
  
  
export default   ConnectMongoDB(handler)