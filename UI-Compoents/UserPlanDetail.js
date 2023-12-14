import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { ThemeContext } from '../Context/ThemeContext'

const UserPlanDetail = ({list}) => {
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
                <th>Email</th>
                <th>Investment</th>
                <th>Status</th>
                <th>Join</th>
                <th>End</th>
              </tr>
            </thead>

           
            
            {list.map((item,index)=>{

              return(
            <tbody >
              <tr>
                <td>{index+1}</td>
                <td>{item.email}</td>
                <td>{item.investment}</td>
               <td>{item.status}</td>
                <td>{item.date}</td>
                <td>{item.enddate}</td>
                
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

export default UserPlanDetail