import ConnectMongoDB from '../../../middleware/mongoose'
import Request from '../../../models/Request'

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
        const {email,method,address,amount,bankname} = req.body
        let p = new Request({
            method:method,
            address:address,
            email:email,
            amount:amount,
            date:formattedToday,
            bankname:bankname
        })
    //     let getUser  = await User.findOne({email:email})
    //     for(var i=0; i<=getUser.teams.length;i++)
    // {
    //     if(getUser.teams[i].direct.plan=='yes')
    //     {
    //         let getdirectUserbyId = await User.findOne({_id:getUser.teams[0].direct.id})
    //         const invesetment=getdirectUserbyId.investment;
    //         const invested_time=p.createdAt;
    //         const finalPecentage=invesetment*100/5;
    //         const finalbalance = getdirectUserbyId.balance+finalPecentage
    //         await User.updateOne({_id:getdirectUserbyId},{balance:finalbalance})
    //     }
    //     if(getUser.teams[i].indirect.plan=='yes')
    //     {
    //         let getdirectUserbyId = await User.findOne({_id:getUser.teams[0].indirect.id})
    //         const invesetment=getdirectUserbyId.investment;
    //         const invested_time=p.createdAt;
    //         const finalPecentage=invesetment*100/3;
    //         const finalbalance = getdirectUserbyId.balance+finalPecentage
    //         await User.updateOne({_id:getdirectUserbyId},{balance:finalbalance})
    //     }
    // }
        await p.save()
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
