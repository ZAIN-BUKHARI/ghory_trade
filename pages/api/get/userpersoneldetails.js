import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'

const handler= async (req, res)=> {
    if(req.method=='GET'){
        try{
            let user = await User.findOne({email:req.query.email})
            res.status(200).send({homeaddress:user.address,number:user.number,idcard:user.cnic,uname:user.firstname,lastname:user.lastname,email:user.email})

        }catch(e)
        {
            res.status(200).send({success:false})
        }
        
    }
    
}
  
  
  
export default   ConnectMongoDB(handler)