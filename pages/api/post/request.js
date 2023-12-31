import ConnectMongoDB from '../../../middleware/mongoose'
import Request from '../../../models/Request'
import User from '../../../models/User'

const handler= async (req, res)=> {
    if(req.method=='POST'){
       try{ 
        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; // Months start at 0!
        let dd = today.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        const formattedToday = dd + '/' + mm + '/' + yyyy;
        const {email,method,account,amount,bankname,Userid} = req.body

        //-----------------Input fields check--------------------
        if(account.length==0 || amount==0)
            res.status(200).json({success:'false',error:"Cannot submit empty request" })
        if(amount<20)
          res.status(200).json({success:'false',error:"More than 20$ withdarwal allowed " })
        
        let user = await User.findOne({_id:Userid})
        
        if(user.balance<amount)
            res.status(200).json({success:'false',error:"insufficient balance" })

        //-----------------Input fields check--------------------

        let p;
        if(user.email==email)
        {
            p = new Request({
                method:method,
                address:account,
                email:email,
                amount:amount,
                date:formattedToday,
                bankname:bankname
            })
        }

        await p.save()
        let balance = user.balance;
        balance = balance - amount
        await User.updateOne({_id:user._id},{balance:balance})
        res.status(200).json({ success:true })
       }
       catch(error){
        res.status(200).json({ error:false })
       }
}
else{

    res.status(400).json({ error : 'this method is not defined' })
}
  }
  
  
  
  export default   ConnectMongoDB(handler)


//   const cron = require('node-cron');
// const { MongoClient } = require('mongodb');

// const uri = 'mongodb://localhost:27017'; // Your MongoDB URI
// const dbName = 'your-database-name';

// async function updateDocuments() {
//   const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

//   try {
//     await client.connect();
//     const db = client.db(dbName);
//     const collection = db.collection('items');

//     const currentDate = new Date();
//     currentDate.setMonth(currentDate.getMonth() - 1); // Subtract a month from the current date

//     // Find documents with status "no" and lastUpdated more than a month ago
//     const documentsToUpdate = await collection.find({
//       status: 'no',
//       lastUpdated: { $lte: currentDate },
//     }).toArray();

//     for (const doc of documentsToUpdate) {
//       // Update the status to "yes" and update the lastUpdated field
//       await collection.updateOne(
//         { _id: doc._id },
//         {
//           $set: {
//             status: 'yes',
//             lastUpdated: new Date(),
//           },
//         }
//       );
//       console.log(`Updated document with _id: ${doc._id}`);
//     }
//   } catch (err) {
//     console.error('Error:', err);
//   } finally {
//     client.close();
//   }
// }

// // Schedule the task to run every day at a specific time (e.g., midnight)
// cron.schedule('0 0 * * *', () => {
//   console.log('Running document update task...');
//   updateDocuments();
// });
