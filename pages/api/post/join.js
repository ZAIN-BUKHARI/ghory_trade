import ConnectMongoDB from '../../../middleware/mongoose'
import Plan from '../../../models/Plan'
import User from '../../../models/User'

const end = new Date();
        const yyyyy = end.getFullYear() + 1;
        let mmm = end.getMonth() + 1; // Months start at 0!
        let ddd = end.getDate();

        if (ddd < 10) ddd = '0' + ddd;
        if (mmm < 10) mmm = '0' + mmm;

        const endDate= ddd + '/' + mmm + '/' + yyyyy;

const join = new Date();
        const yyyy = join.getFullYear();
        let mm = join.getMonth() + 1; // Months start at 0!
        let dd = join.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        const joinDate = dd + '/' + mm + '/' + yyyy;
const handler= async (req, res)=> {
    if(req.method=='POST'){
        if(req.body.img1 && req.body.img2!="")
        {

        
       try{ 
        let p = new Plan({
            name:req.body.name,
            lastname:req.body.lastname,
            email:req.body.email,
            phone:req.body.phone,
            address:req.body.address,
            cnic:req.body.cnic,
            img1:req.body.img1,
            img2:req.body.img2,
            level:req.body.level,
            investment:req.body.investment,
            currency:req.body.currency,
            date:joinDate,
            enddate:endDate
            
            
        })
        await p.save()
        res.status(200).json({ success:true })
       }
       catch(error){
        res.status(200).json({ error:'Server error' })
       }}
       else
       {
        res.status(200).json({ error : 'Payment ScreenShot' })
           
       }
}

else{

    res.status(200).json({ error : 'request method is incorrect it should be post' })
}
  }
  
  
  
  export default   ConnectMongoDB(handler)