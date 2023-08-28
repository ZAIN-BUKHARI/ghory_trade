
import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'

const handler= async (req, res)=> {
    try {
        var event = await User.find({
          email: { $regex: req.query.name, $options: "i" },
        });
        if(event.length > 0){
          return res.status(200).json({event})  
        }else{
          var event = await User.find({
            firstname: { $regex: req.query.name, $options: "i" },
          })
          if(event.length>0){
            return res.status(200).json({event})
          }else{
            var event = await User.find({
                createdAt: { $regex: req.query.name, $options: "i" },
            })
            if(event.length >0){
              return res.status(200).json({event})
            }else{
              return res.status(200).json({})
            }
          }
        }
    
      } catch (e) {
        res.status(200).json({ error : false })
      }
  }
  
  
  
  export default   ConnectMongoDB(handler)



