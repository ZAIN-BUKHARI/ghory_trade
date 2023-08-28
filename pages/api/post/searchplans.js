
import ConnectMongoDB from '../../../middleware/mongoose'
import Plan from '../../../models/Plan'

const handler= async (req, res)=> {
    try {
        var event = await Plan.find({
          email: { $regex: req.query.name, $options: "i" },
        });
        if(event.length > 0){
          return res.status(200).json({event})  
        }else{
          var event = await Plan.find({
            name: { $regex: req.query.name, $options: "i" },
          })
          if(event.length>0){
            return res.status(200).json({event})
          }else{
            var event = await Plan.find({
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



