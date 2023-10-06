import React from 'react'

const Worksheet = ({list}) => {
    console.log(list)
    
    return(
      <>
      <div className='detail-body-page'>

      <section class="main ">
      <section class="attendance">
        <div class="attendance-list">
          <table class="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Investment</th>
                <th>Join</th>
                <th>Number</th>
                <th>Status</th>
              </tr>
            </thead>

            
            { list.map((item,index)=>{

              return(
            <tbody >
              <tr>
                <td>{index+1}</td>
                <td>{item.firstname.slice(0,10)}</td>
                <td>{item.email}</td>
                {item.planId=='' && <td>Not invested</td>}
                {item.planId!='' && <td>{item.perDayProfit*150}</td>}
                <td>{item.createdAt.slice(0,10)}</td>
                <td>{item.number}</td>
               {item.planId=='' && <td>Inactive</td>}
               {item.planId!='' && <td>Active</td>}
                
              </tr>
              
            </tbody>
             )})} 
          </table>
        </div>
      </section>
    </section>
    </div>

   
    </>
    )




















}

export default Worksheet