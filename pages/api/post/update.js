import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'

const handler= async (req, res)=> {
    if(req.method=='POST'){
    
        const {email,enddate,balance,todaywork,subscription,createdAt,id,admin,level,pdprofit,views,cnic,address,number}=req.body
        try{ 
        let user = await User.findByIdAndUpdate({_id:id},{email,balance,todaywork,subscription,date:createdAt,admin,level,perDayProfit:pdprofit,enddate,views,cnic,address,number})
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