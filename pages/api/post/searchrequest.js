
import ConnectMongoDB from '../../../middleware/mongoose'
import Request from '../../../models/Request'

const handler= async (req, res)=> {
    try {
        var event = await Request.find({
          email: { $regex: req.query.name, $options: "i" },
        });
        if(event.length > 0){
          return res.status(200).json({event})  
        }else{
          var event = await Request.find({
            address: { $regex: req.query.name, $options: "i" },
          })
          if(event.length>0){
            return res.status(200).json({event})
          }else{
            var event = await Request.find({
              date: { $regex: req.query.name, $options: "i" },
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



