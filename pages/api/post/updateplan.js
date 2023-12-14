import ConnectMongoDB from '../../../middleware/mongoose'
import Plan from '../../../models/Plan'
        
        const handler= async (req, res)=> {
            if(req.method=='POST'){
            
                const {_id,email,status,createdAt,id,investment,enddate,method}=req.body
                try{ 
               let plan =  await Plan.findByIdAndUpdate({_id:id},{
                    _id:_id,
                    email:email,
                    status:status,
                    date:createdAt,
                    investment:investment,
                    enddate:enddate,
                    method:method
                })
                await plan.save()
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