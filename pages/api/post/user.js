import User from '../../../models/User'
import ConnectMongoDB from '../../../middleware/mongoose'

const handler= async (req,res)=>{
    if(req.method=='POST'){
        const id = (req.body.token)
        console.log(id)
        try{
            let user = await User.findById({_id:id})
            if(user)
                res.status(500).json({success:false})
            else
                res.status(200).json({user})
            
        }catch(e){
                res.status(200).json({success:"server error"})

        }
    }
}

export default   ConnectMongoDB(handler)