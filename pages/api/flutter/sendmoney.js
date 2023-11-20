import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'
import Send from '../../../models/Send'

const handler= async (req, res)=> {
    if(req.method=='POST'){
        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; // Months start at 0!
        let dd = today.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;
        const formattedToday = dd + '/' + mm + '/' + yyyy;
        const {id,amount,email,comment}=req.body;
        try{ 
        

            let convert = parseFloat(amount);
            let receiver = await User.findOne({_id:id})
            let sender = await User.findOne({email:email})
            
            if(receiver.email!=sender.email)
            {

            if(receiver!=null && sender!=null && sender.balance>=amount)
            {  
                let increment=receiver.balance+convert;
                let decrement=sender.balance-convert;
                await User.updateOne({_id:id},{balance:increment})
                await User.updateOne({email:email},{balance:decrement})
                let result = new Send({
                    sendername:sender.lastname,
                    receivername:receiver.lastname,

                    senderaddress:sender._id,
                    receiveraddress:receiver._id,

                    senderemail:sender.email,
                    receiveremail:receiver.email,

                    sender:sender._id,
                    receiver:receiver._id,

                    amount:convert,
                    comment:comment,
                    date:formattedToday.toString()
                })
                result.save();
                res.status(200).json({success:true});
            }else{
                res.status(200).json({error:'Transaction failed'})
            }
        }else{
            let result = new Send({
                    sendername:sender.lastname,
                    receivername:sender.lastname,
                    senderaddress:sender._id,
                    receiveraddress:sender._id,
                    senderemail:sender.email,
                    receiveremail:sender.email,
                    sender:sender._id,
                    receiver:sender._id,

                    amount:convert,
                    comment:comment,
                    date:formattedToday.toString()
            })
            result.save();
            res.status(200).json({success:true});
        }

        }catch(e)
        {
            res.status(200).json({error:'Network Error'})
            
        }
    }
}
  
  
  
export default   ConnectMongoDB(handler)