import ConnectMongoDB from '../../../middleware/mongoose'
import Plan from '../../../models/Plan'

const handler= async (req, res)=> {


    for(let i =0;i<81;i++)
    {

        let p = new Plan({
            name:`DIRECT-USER-${1}`,
            lastname:`DIRECT-USER-${1}`,
            email:`DIRECT-USER_${i}`,
            phone:`DIRECT-USER-${1}`,
            address:`DIRECT-USER-${1}`,
            cnic:`DIRECT-USER-${1}`,
            img1:`DIRECT-USER-${1}`,
            img2:`DIRECT-USER-${1}`,
            level:`DIRECT-USER-${1}`,
            investment:100,
            currency:`DIRECT-USER-${1}`,
            date:'joinDate',
            enddate:'endDate'
            
            
        })
        await p.save()
       }
      
  res.status(200).json(true)

   
  }

  
  
    

  
  
  
export default   ConnectMongoDB(handler)