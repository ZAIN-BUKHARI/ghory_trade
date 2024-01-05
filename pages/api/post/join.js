import ConnectMongoDB from '../../../middleware/mongoose'
import Plan from '../../../models/Plan'
import User from '../../../models/User'



const handler= async (req, res)=> {
   
    if(req.method=='POST'){
        const {email,img1,img2,investment,wallet}=req.body
       try{

        //conditon checkk block 
        //---------------------------condition check-------------------------------------
        if(investment<100)
            res.status(200).json({success:false,error:'Minimum $100 dollars plan'})

        let user = await User.findOne({email:email})

        if(user.balance<investment && wallet=="WALLET")
            res.status(200).json({success:false,error:'Insufficent balance'})
        //---------------------------condition check-------------------------------------
        if(img1!="" && img2!="")
        {
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
            if(wallet=="WALLET")
            {
                await User.updateOne(
                    {email:req.body.email},
                    {
                        subscription:"process",
                        number:req.body.number,
                        address:req.body.address,
                        cnic:req.body.cnic,
                        $inc:{balance:-investment}
                    }
                    )
            }else{
                await User.updateOne(
                    {email:req.body.email},
                    {
                        subscription:"process",
                        number:req.body.number,
                        address:req.body.address,
                        cnic:req.body.cnic,
                    }
                    )
            }

            
        }
        else
        {
            if(wallet=="WALLET")
            {
                await User.updateOne(
                    {email:req.body.email},
                    {
                        review:"review",
                        $inc:{balance:-investment}
                    }
                    )
            }
            else{
                await User.updateOne(
                    {email:req.body.email},
                    {
                        review:"review",

                    }
                    )
            }    
        }
        await p.save()
        res.status(200).json({success:true })
       }
       
       else
       {
        res.status(200).json({ error : 'Upload Both ScreenShots' })
           
       }
    }
       catch(error){
        res.status(200).json({success:false, error:'Server error' })
       }}


else{

    res.status(200).json({ error : 'request method is incorrect it should be post' })
}
  }
  
  
  
  export default   ConnectMongoDB(handler)