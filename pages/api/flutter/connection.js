import ConnectMongoDB from '../../../middleware/mongoose'

const handler= async (req, res)=> {
    if(req.method=='GET'){
        try
        {
            res.status(200).json({success:true})
        }
        catch(e)
        {
            res.status(200).json({success:false})
        }
    }
}
  
  
  
export default   ConnectMongoDB(handler)