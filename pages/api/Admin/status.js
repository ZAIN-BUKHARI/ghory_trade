import ConnectMongoDB from '../../../middleware/mongoose'
import Order from '../../../models/Order'

const handler= async (req, res)=> {
    const {_id,Marked}=req.body
    console.log(Marked)
        let orders = await Order.findByIdAndUpdate({_id},{status:Marked})
        orders.save()
        res.status(200).send({orders})
}
  
  
  
export default   ConnectMongoDB(handler)