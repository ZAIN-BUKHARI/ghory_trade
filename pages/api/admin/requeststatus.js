import ConnectMongoDB from '../../../middleware/mongoose'
import Request from '../../../models/Request'
import User from '../../../models/User'

const handler= async (req, res)=> {
    
        try{
        if(req.query.status =='verified'){
                let result = await Request.findByIdAndUpdate({_id:req.query._id},{status:req.query.status})
                if(result){
                        let response = await Request.findOne({_id:req.query._id})
                        if(response){
                                let user = await User.findOne({email:response.email})
                                if(user){
                                        const decrementAmount = user.balance - response.amount;
                                       let updateOneuser =  await User.updateOne({email:response.email},{balance:decrementAmount})
                                       if(updateOneuser){
                                               await result.save()
                                               res.status(200).send({'success':true})
                                        }
                                        else{ res.status(200).send({'success':false}) }
                                }else{ res.status(200).send({'success':false}) }
                        }else{ res.status(200).send({'success':false}) }
                }else{ res.status(200).send({'success':false}) }
}else{
        let result = await Request.findByIdAndUpdate({_id:req.query._id},{status:req.query.status})
        await result.save()
        res.status(200).send({'success':true})
}
}catch(e){
        res.status(200).send({'error':false})
        
}
   
}
  
  
  
export default   ConnectMongoDB(handler)


