import ConnectMongoDB from '../../../middleware/mongoose'
import Plan from '../../../models/Plan'

const handler= async (req, res)=> {
    if(req.method=='POST'){
        console.log(req.body.name)
       try{ 
        let p = new Plan({
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            address:req.body.address,
            cnic:req.body.cnic,
            img:"path",
            level:"1",
            investment:"200",
            
            
        })
         let a = await p.save()
        res.status(200).json({ success:true })
       }
       catch(error){
        res.status(200).json({ error:false })
       }
}
else{

    res.status(400).json({ error : 'this method is not defined' })
}
  }
  
  
  
  export default   ConnectMongoDB(handler)