import ConnectMongoDB from '../../../middleware/mongoose'
import Video from '../../../models/Video'
import User from '../../../models/User'

const handler= async (req, res)=> {
    if(req.method=='POST'){
        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; // Months start at 0!
        let dd = today.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;
        const formattedToday = dd + '/' + mm + '/' + yyyy;
        const links={
            link1:req.body.link1,
            link2:req.body.link2,
            link3:req.body.link3,
            link4:req.body.link4,
            link5:req.body.link5,
            link6:req.body.link6,
            link7:req.body.link7,
            link8:req.body.link8,
            link9:req.body.link9,
            link10:req.body.link10,
            
        }    
       try{ 
            let p = new Video({
                links:links,
                date:formattedToday.toString()
                
            })
            await p.save()
            let user = await User.updateMany({},{todaywork:"no"})
            if(user){
                res.status(200).json({ success:true })
            }
            else{
            res.status(200).json({ success:false })
            }
       }
       catch(error){
        res.status(200).json({ error:'server error catch ' })
       }
}
else{

    res.status(200).json({ error : 'this method is not defined' })
}
  }
  
  
  
  export default   ConnectMongoDB(handler)