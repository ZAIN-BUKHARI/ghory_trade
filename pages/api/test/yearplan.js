import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'
const { addMonths, format } = require("date-fns");

const handler= async (req, res)=> {
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
        
          const todayDate = parseCustomDateFormat('22/10/2023'); // Note: Months are 0-based (8 represents September)
           const oneYearSalaryPlan = generateOneYearSalaryPlan(todayDate);
           res.status(200).send({"plan":oneYearSalaryPlan})
        
        //chohan

        res.status(200).json(true)
    }
    

  
  
  
export default   ConnectMongoDB(handler)