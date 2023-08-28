import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'

const handler= async (req, res)=> {
    if(req.method=='POST'){
    
        const {_id,firstname,email,password,balance,todaywork,subscription,createdAt,id}=req.body
        try{ 
        let user = await User.findByIdAndUpdate({_id:id},{_id,firstname,email,password,balance,todaywork,subscription,createdAt})
            await user.save()
            res.status(200).json({ success:true })
       }
       catch(error){
           res.status(200).json({ error:'server error' })
        }
        
    
}
else{

    res.status(400).json({ error : 'this method is not defined' })
}
  }
  
  
  
  export default   ConnectMongoDB(handler)