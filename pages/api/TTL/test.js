import ConnectMongoDB from '../../../middleware/mongoose'
import Plan from '../../../models/Plan'
import User from '../../../models/User'

const handler= async (req, res)=> {
    if(req.method=='POST'){
        
        const today = new Date();
        const yyyy = today.getFullYear()+1;
        let mm = today.getMonth() + 1; // Months start at 0!
        let dd = today.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        const formattedToday = dd + '/' + mm + '/' + yyyy;

        if(Plan.date == formattedToday)
        {
            res.send(formattedToday)
        }

        }

else{

    res.status(200).json({ error : 'request method is incorrect it should be post' })
}
  }
  
  
  
  export default   ConnectMongoDB(handler)