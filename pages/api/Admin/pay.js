import ConnectMongoDB from '../../../middleware/mongoose'
import Order from '../../../models/Order'

const handler= async (req, res)=> {
    const {_id,Pay}=req.body
    console.log(_id)
    if(!Pay){
        let orders = await Order.findByIdAndUpdate({_id},{payment:''})
        orders.save()
        res.status(200).send({orders})
    }
    else{
        let orders = await Order.findByIdAndUpdate({_id},{payment:'done'})
        orders.save()
        res.status(200).send({orders})
    }
}
  
  
  
export default   ConnectMongoDB(handler)