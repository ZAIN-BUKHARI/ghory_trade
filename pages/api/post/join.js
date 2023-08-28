import ConnectMongoDB from '../../../middleware/mongoose'
import Plan from '../../../models/Plan'

const handler= async (req, res)=> {
    if(req.method=='POST'){
        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; // Months start at 0!
        let dd = today.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        const formattedToday = dd + '/' + mm + '/' + yyyy;
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
            date:formattedToday
            
            
        })
         let a = await p.save()
        res.status(200).json({ success:true })
       }
       catch(error){
        res.status(200).json({ error:'Server error' })
       }
}
else{

    res.status(200).json({ error : 'request method is incorrect it should be post' })
}
  }
  
  
  
  export default   ConnectMongoDB(handler)