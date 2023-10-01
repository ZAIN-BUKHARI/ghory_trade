import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'
import Test from '../../../models/Test'
import Selrate from '../../../models/Selrate'
const handler= async (req, res)=> {
        
        let sel = await Test.findOne({_id:'65196ed75d0d18d8dc29447c'})
        let rate = sel.Selrate + 100 
          const test = await Test.findOneAndUpdate(
            { _id: '65196ed75d0d18d8dc29447c', __v: 6 }, // Ensure the version matches
            { Selrate:rate ,  $inc: { __v: 1,} }, // Increment the version
            { new: true } // Return the updated document
          );
    
        res.status(200).send({success:true})
}
  
  
  
export default   ConnectMongoDB(handler)