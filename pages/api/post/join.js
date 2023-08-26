import ConnectMongoDB from '../../../middleware/mongoose'
import Plan from '../../../models/Plan'

const handler= async (req, res)=> {
    if(req.method=='POST'){
       try{ 
        let p = new Plan({
            name:req.body.name,
            lastname:req.body.lastname,
            email:req.body.email,
            phone:req.body.phone,
            address:req.body.address,
            cnic:req.body.cnic,
            img:"path",
            level:req.body.level,
            investment:req.body.investment,
            currency:req.body.currency,
            
            
        })
         let a = await p.save()
        res.status(200).json({ success:true })
       }
       catch(error){
        res.status(200).json({ error:'Request failed' })
       }
}
else{

    res.status(200).json({ error : 'request method is incorrect it should be post' })
}
  }
  
  
  
  export default   ConnectMongoDB(handler)