import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'

const handler= async (req, res)=> {
    if(req.method=='POST'){
        await User.updateOne({email:req.body.email},{channel:'yes'})
        res.status(200).json(true)
    }
    else{
        let orders = await User.find()
        orders.reverse()
        res.status(200).send({orders})
    }
}
  
  
  
export default   ConnectMongoDB(handler)