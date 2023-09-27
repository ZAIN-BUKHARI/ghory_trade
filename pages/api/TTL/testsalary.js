import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'
import Plan from '../../../models/Plan'

    
const handler= async (req, res)=> {
   //current DD/MM/YYY
   const join = new Date();
   const yyy = join.getFullYear() ;
   let mmm = join.getMonth() + 1; // Months start at 0!
   let ddd = join.getDate();
   if (ddd < 10) ddd = '0' + ddd;
   if (mmm < 10) mmm = '0' + mmm;
   const currentDate = ddd + '/' + mmm + '/' + yyy;
    let user;
    let plan;
    let stop=0;
    let A=0;
    let max_one_A=0; //10K
    let max_two_B=0; //20K
    let max_three_C=0; //30K
    let max_four_D=0; //40K
    let totalSalary = 0;
    if(req.method=='POST'){
        const {Userid} = req.body
         user = await User.findOne({_id:Userid})
         plan = await Plan.findOne({_id:user.planId})
         let arr=[];
         let sortedArr=[5]
            for(let i=0;i<user.teams.length;i++)
            {
                arr[i] = user.teams[i]
            }
            for(let i=0;i<arr.length;i++)
            {
                for(let j=i;j<arr.length;j++)
                {
                    if(arr[j]['direct'].investment>arr[i]['direct'].investment && arr[i]['direct'].plan=='yes')
                    {
                        let temp =  arr[i]; 
                        arr[i] = arr[j]
                        arr[j] = temp;
                    }
                }
            }
            for(let i=0;i<5;i++)
            {
            if(user.teams[i] && arr[i]['direct'].plan=='yes')
            {
              if(arr[i]['direct'].plan=='yes')    
                  sortedArr[i] = arr[i]
                  A = A + arr[i]['direct'].investment
                    
              }
            
            }

            A = A + plan.investment; //600
            //LEADER =100
            //D1==100 D1+LEADER =A
            //D2==100 D1 + D2 + LEADER =B
            //D3==100 D1  D2 + D3 + LEADER =C
            //D4==100 D1 + D2 +D3 D4 + LEADER =D
            //D5==100 D1 + D2 +D3 + D4 + D5 + LEADER =GM
            max_one_A =   A[0] 
            max_two_B =   A[0] + A[1] 
            max_three_C = A[0] + A[1] + A[2] 
            max_four_D =  A[0] + A[1] + A[2] + A[4] 
            for(let i=0;i<user.teams.length;i++)
        {
            user = await User.findOne({_id:Userid})
            plan = await Plan.findOne({_id:user.planId})
          
            console.log(A)
            const fivePercentSalary  = ((user.teams[i]['direct'].investment*20/100)*5/100)
            const threePercentSalary = ((user.teams[i]['indirect'].investment*20/100)*3/100)
          
        if(max_one_A<10000 )
        {

        if(user.teams[i]['direct'].plan=='yes' && user.teams[i]['direct'].investment>=100 ){ 

          

            if(
              currentDate==user.teams[i]['direct'].salaryDate[0]  ||
              currentDate==user.teams[i]['direct'].salaryDate[1]  ||
              currentDate==user.teams[i]['direct'].salaryDate[2]  ||
              currentDate==user.teams[i]['direct'].salaryDate[3]  ||
              currentDate==user.teams[i]['direct'].salaryDate[3]  ||
              currentDate==user.teams[i]['direct'].salaryDate[4]  ||
              currentDate==user.teams[i]['direct'].salaryDate[5]  ||
              currentDate==user.teams[i]['direct'].salaryDate[6]  ||
              currentDate==user.teams[i]['direct'].salaryDate[7]  ||
              currentDate==user.teams[i]['direct'].salaryDate[8]  ||
              currentDate==user.teams[i]['direct'].salaryDate[9]  ||
              currentDate==user.teams[i]['direct'].salaryDate[10] ||
              currentDate==user.teams[i]['direct'].salaryDate[11] 
              )
            {
              totalSalary = user.balance + fivePercentSalary
              await User.updateOne({_id:user._id},{balance:totalSalary})
              totalSalary=0;
            }
                 
        
          }
          if(user.teams[i]['indirect'].plan=='yes' && user.teams[i]['indirect'].investment>=100 ){

          if(
            currentDate==user.teams[i]['indirect'].salaryDate[1]  ||
            currentDate==user.teams[i]['indirect'].salaryDate[2]  ||
            currentDate==user.teams[i]['indirect'].salaryDate[3]  ||
            currentDate==user.teams[i]['indirect'].salaryDate[3]  ||
            currentDate==user.teams[i]['indirect'].salaryDate[4]  ||
            currentDate==user.teams[i]['indirect'].salaryDate[5]  ||
            currentDate==user.teams[i]['indirect'].salaryDate[6]  ||
            currentDate==user.teams[i]['indirect'].salaryDate[7]  ||
            currentDate==user.teams[i]['indirect'].salaryDate[8]  ||
            currentDate==user.teams[i]['indirect'].salaryDate[9]  ||
            currentDate==user.teams[i]['indirect'].salaryDate[10] ||
            currentDate==user.teams[i]['indirect'].salaryDate[11] ||
            currentDate==user.teams[i]['indirect'].salaryDate[12] 
           )
          {
          let addingSalary = await User.findOne({_id:Userid})
          totalSalary = addingSalary.balance + threePercentSalary
          await User.updateOne({_id:Userid},{balance:totalSalary})
          totalSalary=0;
        }
        }
        }
        else if(max_one_A>=10000 && user.teams[i]['direct'].plan=='yes' && stop==0){

          let salary=0;
          if(max_four_D>=40000 && max_four_D<50000)
          {
            if(
              currentDate==user.teams[i]['direct'].salaryDate[0]  ||
              currentDate==user.teams[i]['direct'].salaryDate[1]  ||
              currentDate==user.teams[i]['direct'].salaryDate[2]  ||
              currentDate==user.teams[i]['direct'].salaryDate[3]  ||
              currentDate==user.teams[i]['direct'].salaryDate[3]  ||
              currentDate==user.teams[i]['direct'].salaryDate[4]  ||
              currentDate==user.teams[i]['direct'].salaryDate[5]  ||
              currentDate==user.teams[i]['direct'].salaryDate[6]  ||
              currentDate==user.teams[i]['direct'].salaryDate[7]  ||
              currentDate==user.teams[i]['direct'].salaryDate[8]  ||
              currentDate==user.teams[i]['direct'].salaryDate[9]  ||
              currentDate==user.teams[i]['direct'].salaryDate[10] ||
              currentDate==user.teams[i]['direct'].salaryDate[11] 
              )
            {

              salary = user.balance + 400; 
              await User.updateOne({_id:user._id},{balance:salary})
              break;
            }

          }
          else if(max_three_C>=30000 && max_three_C<40000)
          {
            if(
              currentDate==user.teams[i]['direct'].salaryDate[0]  ||
              currentDate==user.teams[i]['direct'].salaryDate[1]  ||
              currentDate==user.teams[i]['direct'].salaryDate[2]  ||
              currentDate==user.teams[i]['direct'].salaryDate[3]  ||
              currentDate==user.teams[i]['direct'].salaryDate[3]  ||
              currentDate==user.teams[i]['direct'].salaryDate[4]  ||
              currentDate==user.teams[i]['direct'].salaryDate[5]  ||
              currentDate==user.teams[i]['direct'].salaryDate[6]  ||
              currentDate==user.teams[i]['direct'].salaryDate[7]  ||
              currentDate==user.teams[i]['direct'].salaryDate[8]  ||
              currentDate==user.teams[i]['direct'].salaryDate[9]  ||
              currentDate==user.teams[i]['direct'].salaryDate[10] ||
              currentDate==user.teams[i]['direct'].salaryDate[11] 
              )
            {
              salary = user.balance + 300; 
              await User.updateOne({_id:user._id},{balance:salary})
              break;
            }

          }
          else if(max_two_B>=20000 && max_two_B<30000)
          {
            if(
              currentDate==user.teams[i]['direct'].salaryDate[0]  ||
              currentDate==user.teams[i]['direct'].salaryDate[1]  ||
              currentDate==user.teams[i]['direct'].salaryDate[2]  ||
              currentDate==user.teams[i]['direct'].salaryDate[3]  ||
              currentDate==user.teams[i]['direct'].salaryDate[3]  ||
              currentDate==user.teams[i]['direct'].salaryDate[4]  ||
              currentDate==user.teams[i]['direct'].salaryDate[5]  ||
              currentDate==user.teams[i]['direct'].salaryDate[6]  ||
              currentDate==user.teams[i]['direct'].salaryDate[7]  ||
              currentDate==user.teams[i]['direct'].salaryDate[8]  ||
              currentDate==user.teams[i]['direct'].salaryDate[9]  ||
              currentDate==user.teams[i]['direct'].salaryDate[10] ||
              currentDate==user.teams[i]['direct'].salaryDate[11] 
              )
            {
              salary = user.balance + 200; 
              await User.updateOne({_id:user._id},{balance:salary})
              break;
            }

          }
          else if(max_one_A>=10000 && max_one_A<20000)
          {
            if(
              currentDate==user.teams[i]['direct'].salaryDate[0]  ||
              currentDate==user.teams[i]['direct'].salaryDate[1]  ||
              currentDate==user.teams[i]['direct'].salaryDate[2]  ||
              currentDate==user.teams[i]['direct'].salaryDate[3]  ||
              currentDate==user.teams[i]['direct'].salaryDate[3]  ||
              currentDate==user.teams[i]['direct'].salaryDate[4]  ||
              currentDate==user.teams[i]['direct'].salaryDate[5]  ||
              currentDate==user.teams[i]['direct'].salaryDate[6]  ||
              currentDate==user.teams[i]['direct'].salaryDate[7]  ||
              currentDate==user.teams[i]['direct'].salaryDate[8]  ||
              currentDate==user.teams[i]['direct'].salaryDate[9]  ||
              currentDate==user.teams[i]['direct'].salaryDate[10] ||
              currentDate==user.teams[i]['direct'].salaryDate[11] 
              )
            {
            salary = user.balance + 100; 
            await User.updateOne({_id:user._id},{balance:salary})
            break;
            }
          }
        }
        else if(A>=50000)
        {
          if(A>=50000 && A<150000)
            await User.updateOne({_id:user._id},{Rank:'GM',balance:(user.balance+100)})
          else if(A>=150000 && A<500000 )
            await User.updateOne({_id:user._id},{Rank:'VP',balance:(user.balance+150)})
          else if(A>=500000 && A<200000)
            await User.updateOne({_id:user._id},{Rank:'SVP',balance:(user.balance+600)})
          else if(A>=200000 && A<600000)
            await User.updateOne({_id:user._id},{Rank:'MD',balance:(user.balance+1500)})
          else if(A>=600000 )
            await User.updateOne({_id:user._id},{Rank:'ED',balance:(user.balance+13000)})
          
        }
        stop=1;
            }
       res.status(200).json({success:true})
    }
else{

    res.status(200).json({ error : 'request method is incorrect it should be post' })
}
  }
  
  
  
  export default   ConnectMongoDB(handler)


