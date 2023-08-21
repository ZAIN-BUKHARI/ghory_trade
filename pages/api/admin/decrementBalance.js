import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'

const handler= async (req, res)=> {
    if(req.method=='POST'){
        console.log('hit')
        const {finalBalance,email} = req.body
        await User.updateOne({email:email},{balance:finalBalance})
        res.status(200).send(true)   
    }
}
  
  
  
export default   ConnectMongoDB(handler)


