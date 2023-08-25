import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'

const handler= async (req, res)=> {
    if(req.method=='POST'){
        await User.updateOne({email:req.body.email},{channel:'yes'})
        res.status(200).json(true)
    }
    else{
        console.log(req.query.token)
        let orders = await User.find()
        res.status(200).send({orders})
    }
}
  
  
  
export default   ConnectMongoDB(handler)