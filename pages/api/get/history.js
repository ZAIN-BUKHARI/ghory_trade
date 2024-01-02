import ConnectMongoDB from '../../../middleware/mongoose'
import Request from '../../../models/Request'

const handler= async (req, res)=> {
    if(req.method=='GET'){
        const email = req.query.email
        let requests = await Request.find({email})
        requests.reverse()
        if(requests.length==0)
        {
            res.status(200).json({history:"no"})
        }else
        {
            res.status(200).json({history:requests})
        }
    }
}
  
  
  
export default   ConnectMongoDB(handler)