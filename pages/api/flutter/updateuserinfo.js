import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'

const handler= async (req, res)=> {
    if(req.method=='POST'){
    try{

        const {firstname,lastname,number,email} = req.body
        let u = await User.updateOne({email:email},{firstname,lastname,number})
        res.status(200).json({success:true})
    }catch(e){
        res.status(200).json({error:'Neteork Error'})
    }
    }
}
  
  
  
export default   ConnectMongoDB(handler)