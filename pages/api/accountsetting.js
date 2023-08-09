import User from '../../models/User'
import ConnectMongoDB from '../../middleware/mongoose'
import jsonwebtoken from 'jsonwebtoken'

const handler= async (req,res)=>{
    if(req.method=='POST'){
        const {address,name,phone,city}=req.body
       
    if(address && name && phone && city){
        let token =req.body.token
        let find= jsonwebtoken.verify(token,'secret123')
        await User.findOneAndUpdate({email:find.email},{name,address,city,phone})  
        res.status(200).json({success:"success"})
    }else{
        res.status(500).json({error:"Fill address correctly:)"})
    }

    }
   

}

export default   ConnectMongoDB(handler)