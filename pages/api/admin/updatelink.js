import ConnectMongoDB from '../../../middleware/mongoose'
import Video from '../../../models/Video'

const handler= async (req, res)=> {
    if(req.method=='POST'){
        const {updateLinks}=req.body
        const links1={
            link:req.body.link1,
            length:req.body.length1,
        }   
        const links2={
            link:req.body.link2,
            length:req.body.length2,
        }   
        const links3={
            link:req.body.link3,
            length:req.body.length3,
        }   
        const links4={
            link:req.body.link4,
            length:req.body.length4,
        }   
        const links5={
            link:req.body.link5,
            length:req.body.length5,
        }   
        const links6={
            link:req.body.link6,
            length:req.body.length6,
        }   
        const links7={
            link:req.body.link7,
            length:req.body.length7,
        }   
        const links8={
            link:req.body.link8,
            length:req.body.length8,
        }   
        const links9={
            link:req.body.link9,
            length:req.body.length9,
        }   
        const links10={
            link:req.body.link10,
            length:req.body.length10,
        }   
        const arr = [links1,links2,links3,links4,links5,links6,links7,links8,links9,links10]
       try{ 
            let p = await Video.findOneAndUpdate({_id:updateLinks},
            { links:arr },
            
            )
            
                res.status(200).json({ success:true })
            
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