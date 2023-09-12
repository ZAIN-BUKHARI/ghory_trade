import ConnectMongoDB from '../../../middleware/mongoose'
import Request from '../../../models/Request'
        
        const handler= async (req, res)=> {
            if(req.method=='POST'){
            
                const {_id,email,address,status,createdAt,id,amount,method}=req.body
                try{ 
               let request =  await Request.findByIdAndUpdate({_id:id},{
                    _id:_id,
                    method:method,
                    address:address,
                    email:email,
                    amount:amount,
                    status:status,
                    date:createdAt,
                })
                await request.save()
                res.status(200).json({ success:true })
               }
               catch(error){
                   res.status(200).json({ error:'server error' })
                }
                
            
        }
        else{
        
            res.status(200).json({ error : 'this method is not defined' })
        }
          }
          
          
          
          export default   ConnectMongoDB(handler)