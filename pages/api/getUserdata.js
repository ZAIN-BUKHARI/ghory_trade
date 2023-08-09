import User from '../../models/User'
import ConnectMongoDB from '../../middleware/mongoose'
import jsonwebtoken from 'jsonwebtoken'

const handler= async (req,res)=>{
    if(req.method=='POST'){
            let token =req.body.token
            let find= jsonwebtoken.verify(token,'secret123')
            let settings = await User.findOne({email:find.email})
            res.status(200).json({success:settings})
        

    }
   

}

export default   ConnectMongoDB(handler)