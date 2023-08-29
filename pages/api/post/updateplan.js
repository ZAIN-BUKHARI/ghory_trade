import ConnectMongoDB from '../../../middleware/mongoose'
import Plan from '../../../models/Plan'
        
        const handler= async (req, res)=> {
            console.log('hit')
            if(req.method=='POST'){
            
                const {_id,name,email,cnic,address,phone,status,createdAt,id,level,investment}=req.body
                try{ 
               let plan =  await Plan.findByIdAndUpdate({_id:id},{
                    _id:_id,
                    name:name,
                    email:email,
                    cnic:cnic,
                    address:address,
                    phone:phone,
                    status:status,
                    createdAt:createdAt,
                    level:level,
                    investment:investment
                })
                console.log(plan)
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