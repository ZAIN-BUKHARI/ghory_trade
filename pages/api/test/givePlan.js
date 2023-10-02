


  import ConnectMongoDB from '../../../middleware/mongoose'
  const { addMonths, format } = require("date-fns");

  const handler= async (req, res)=> {
    if(req.method=='GET'){

        function generateOneYearSalaryPlan(todayDate) {
            const salaryPlan = [];
            let currentDate = new Date(todayDate);
            const endDate = addMonths(currentDate, 12);
        
            while (currentDate <= endDate) {
              salaryPlan.push(format(currentDate, "dd/MM/yyyy"));
              currentDate = addMonths(currentDate, 1);
            }
        
            return salaryPlan;
          }
          function parseCustomDateFormat(customDate) {
            const [day, month, year] = customDate.split("/");
            return new Date(year, month - 1, day); // Note: Months are 0-based
          }
          const todayDate = parseCustomDateFormat('23/09/2023'); // Note: Months are 0-based (8 represents September)
          const oneYearSalaryPlan = generateOneYearSalaryPlan(todayDate);
          res.json(oneYearSalaryPlan)
    }
    
}
  
  
  
export default   ConnectMongoDB(handler)