import ConnectMongoDB from '../../../middleware/mongoose'
import Link from '../../../models/Link'

const handler= async (req, res)=> {
    if(req.method=='POST'){
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
        const length={
            link1:req.body.length1,
            link2:req.body.length2,
            link3:req.body.length3,
            link4:req.body.length4,
            link5:req.body.length5,
            link6:req.body.length6,
            link7:req.body.length7,
            link8:req.body.length8,
            link9:req.body.length9,
            link10:req.body.length10,
        }
       try{ 
        let p = new Link({
            links:links,
            length:length,
            
        })
         let a = await p.save()
        res.status(200).json({ success:a })
       }
       catch(error){
        res.status(200).json({ error:error })
       }
}
else{

    res.status(400).json({ error : 'this method is not defined' })
}
  }
  
  
  
  export default   ConnectMongoDB(handler)