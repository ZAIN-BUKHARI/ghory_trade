import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'


const handler= async (req, res)=> {
    const email = req.body.email
    console.log(email)
    let result = await User.updateOne({email:email},{channel:"yes"})
    await result.save()
    res.status(200).json({success:true})
   
}

export default   ConnectMongoDB(handler)
