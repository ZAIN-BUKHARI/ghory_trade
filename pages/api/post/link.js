import ConnectMongoDB from '../../../middleware/mongoose'
import Video from '../../../models/Video'
import User from '../../../models/User'

const handler= async (req, res)=> {
    if(req.method=='GET'){
        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; // Months start at 0!
        let dd = today.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;
        const formattedToday = dd + '/' + mm + '/' + yyyy;
        const links={
            link1:'XCu7DsunC9',
            // link2:req.body.videoLinks[1].id.videoId,
            // link3:req.body.videoLinks[2].id.videoId,
            // link4:req.body.videoLinks[3].id.videoId,
            // link5:req.body.videoLinks[4].id.videoId,
            // link6:req.body.videoLinks[5].id.videoId,
            // link7:req.body.videoLinks[6].id.videoId,
            // link8:req.body.videoLinks[7].id.videoId,
            // link9:req.body.videoLinks[8].id.videoId,
            // link10:req.body.videoLinks[9].id.videoId,
            
        }
        
       try{ 
        let user = await User.updateMany({},{todaywork:"no"})
        if(user){
            let p = new Video({
                links:links,
                date:formattedToday
                
            })
            await p.save()
            res.status(200).json({ success:true })
        }else{
            res.status(500).json({ success:false })
        }
       }
       catch(error){
        res.status(500).json({ error:error })
       }
}
else{

    res.status(400).json({ error : 'this method is not defined' })
}
  }
  
  
  
  export default   ConnectMongoDB(handler)