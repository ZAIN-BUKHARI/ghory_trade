// import ConnectMongoDB from '../../../middleware/mongoose'
// import Request from '../../../models/Request'

// const handler= async (req, res)=> {
    
//         let result = await Request.findByIdAndUpdate({_id:req.query._id},{status:req.query.status})
//         await result.save()
//         res.status(200).send({'success':true})
   
// }
  
  
  
// export default   ConnectMongoDB(handler)


import ConnectMongoDB from '../../../middleware/mongoose'
import Request from '../../../models/Request'
import User from '../../../models/User'

const handler= async (req, res)=> {
    
        let result = await Request.findByIdAndUpdate({_id:req.query._id},{status:req.query.status})
        await result.save()
        if(req.query.status=="verified"){
                await User.updateOne({email:result.email},{balance:-req.query.balance})
        }
        res.status(200).send({'success':true})
   
}
  
  
  
export default   ConnectMongoDB(handler)
