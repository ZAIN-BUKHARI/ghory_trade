import ConnectMongoDB from '../../../middleware/mongoose'
import Plan from '../../../models/Plan'
import User from '../../../models/User'



const handler= async (req, res)=> {
   
    if(req.method=='POST'){
        const {email,img1,img2,investment,wallet,index}=req.body
        if(img1 && img2!="")
        {
       try{
        let user = await User.findOne({email:email})

        
        
        
        let p = new Plan({
            email:email,
            img1:img1,
            img2:img2,
            investment:investment,
            method:wallet, 
        })
        if(user.planId.length==0)
        {
            if(index==1)
            {
                await User.updateOne(
                    {email:req.body.email},
                    {
                        subscription:"process",
                        number:req.body.phone==""?"no":req.body.phone,
                        address:req.body.address==""?"no":req.body.address,
                        cnic:req.body.cnic==""?"no":req.body.cnic,
                    }
                    )

            }else{
                
                await User.updateOne(
                    {email:req.body.email},
                    {
                        subscription:"process",
                        number:req.body.number,
                        address:req.body.homeaddress,
                        cnic:req.body.idcard,
                    }
                    )
            }
        }
        else
        {
            await User.updateOne(
                {email:req.body.email},
                {
                    review:"review",
                }
                )
                
        }
        await p.save()
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