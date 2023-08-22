import ConnectMongoDB from '../../../middleware/mongoose'
import Link from '../../../models/Link'
import User from '../../../models/User'

const handler= async (req, res)=> {
    if(req.method=='POST'){
        const links={
            link1:req.body.videoLinks[0].id.videoId,
            link2:req.body.videoLinks[1].id.videoId,
            link3:req.body.videoLinks[2].id.videoId,
            link4:req.body.videoLinks[3].id.videoId,
            link5:req.body.videoLinks[4].id.videoId,
            link6:req.body.videoLinks[5].id.videoId,
            link7:req.body.videoLinks[6].id.videoId,
            link8:req.body.videoLinks[7].id.videoId,
            link9:req.body.videoLinks[8].id.videoId,
            link10:req.body.videoLinks[9].id.videoId,
        }
        
       try{ 
        let user = await User.updateOne({email:req.query.email},{todaywork:"no"})
        if(user){

            let p = new Link({
                links:links
                
            })
            let a = await p.save()
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