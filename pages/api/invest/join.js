import ConnectMongoDB from '../../../middleware/mongoose'
import Plan from '../../../models/Plan'
import User from '../../../models/User'



const handler= async (req, res)=> {
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


    if(req.method=='POST'){
        const {email,img1,img2,investment,wallet,phone,address,cnic} =  req.body;
        if(req.body.img1 && req.body.img2!="")
        {
       try{
        let user = await User.findOne({email:email})
        
        
        
        let p = new Plan({
            email:email,
            img1:img1,
            img2:img2,
            investment:investment,
            date:joinDate,
            enddate:endDate,
            method:wallet, 
        })
        if(user.planId.length==0)
        {
            await User.updateOne(
                {email:req.body.email},
                {
                    subscription:"process",
                    number:phone,
                    address:address,
                    cnic:cnic,
                }
                )
                await p.save()
            }else{
            await User.updateOne(
                {email:req.body.email},
                {
                    review:"review",
                }
                )
                await p.save()

        }
        res.status(200).json({success:true })
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