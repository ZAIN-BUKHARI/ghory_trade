import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'

const handler= async (req, res)=> {
    if(req.method=='GET'){
        let user = await User.find();
        for(let i=0; i<user.length;i++)
        {
            if(user[i].todaywork=='no' && user[i].subscription=='yes' )
            {
                let val = user[i].balance + user[i].perDayProfit
                await User.updateOne({_id:user[i]._id},{balance:val,todaywork:'yes'})

            }
        }
        res.status(200).send(true)   
    }
}
  
  
  
export default   ConnectMongoDB(handler)


