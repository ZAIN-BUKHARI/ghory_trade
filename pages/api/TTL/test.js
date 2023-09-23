// import ConnectMongoDB from '../../../middleware/mongoose'
// const moment = require('moment');
// const readline = require('readline');




// const handler= async (req, res)=> {
    
//     const rl = readline.createInterface({
//       input: process.stdin,
//       output: process.stdout
//     });
    
//     rl.question('Enter the start date (DD/MM/YY): ', (startDateInput) => {
//       // Validate user input for the start date
//       const startDate = moment(startDateInput, 'DD/MM/YY', true);
    
//       if (!startDate.isValid()) {
//         console.error('Invalid date format. Please use DD/MM/YY.');
//         rl.close();
//         return;
//       }
    
//       // Create an array to store the dates
//       const dates = [];
    
//       // Generate the plan for the whole year with monthly intervals
//       for (let i = 0; i < 12; i++) {
//         const formattedDate = startDate.format('DD/MM/YY');
//         dates.push(formattedDate);
    
//         startDate.add(1, 'month');
//       }
    
//       console.log('Yearly Plan:');
//       dates.forEach((date, index) => {
//         console.log(`Month ${index + 1}: ${date}`);
//       });
    
//       rl.close();
//     });
    
// }
  
  
  
// export default   ConnectMongoDB(handler)
