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
        const links1={link:req.body.link1,}   
        const links2={link:req.body.link2,}   
        const links3={link:req.body.link3,}   
        const links4={link:req.body.link4,}   
        const links5={link:req.body.link5,}   
        const links6={link:req.body.link6,}   
        const links7={link:req.body.link7,}   
        const links8={link:req.body.link8,}   
        const links9={link:req.body.link9,}   
        const links10={link:req.body.link10,}   
         
       try{ 
            let p = new Video({
                links:[links1,links2,links3,links4,links5,links6,links7,links8,links9,links10],
                date:formattedToday.toString()
                
            })
            await p.save()
            let user = await User.updateMany({},{todaywork:"no",views:0})
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