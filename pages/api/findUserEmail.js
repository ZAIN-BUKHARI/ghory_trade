import User from '../../models/User'
import ConnectMongoDB from '../../middleware/mongoose'
import jsonwebtoken from 'jsonwebtoken'

const handler= async (req,res)=>{
    if(req.method=='POST'){
        const token =req.body.token
        const data= jsonwebtoken.verify(token,'secret123')
        let mail = data.email
        let order = await User.findOne({email:mail})
        res.status(200).json({ order })

    }
   

}

export default   ConnectMongoDB(handler)