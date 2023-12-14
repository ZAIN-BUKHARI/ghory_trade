import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { ThemeContext } from '../Context/ThemeContext'

const Worksheet = ({list}) => {
  const {setLoader} = useContext(ThemeContext)
  useEffect(()=>{
      setLoader(true)
      setTimeout(()=>{
          setLoader(false)
      },2000)
  },[])
    
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
                {/* <th>Email</th> */}
                <th>Number</th>
                <th>Join</th>
                <th>Investment</th>
                <th>Status</th>
              </tr>
            </thead>

           
            
            {list.map((item,index)=>{

              return(
            <tbody >
              <tr>
                <td>{index+1}</td>
                <td>{item.firstname.slice(0,10)}</td>
                {/* <td>{item.email}</td> */}
                <td>{item.number}</td>
                {item.planId=='' && <td>Not invested</td>}
                <td>{item.createdAt.slice(0,10)}</td>
               {item.planId=='' && <td>Inactive</td>}
                {item.planId!='' && <td>{item.perDayProfit*150}</td>}
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