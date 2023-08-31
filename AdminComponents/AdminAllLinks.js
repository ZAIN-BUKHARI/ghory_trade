import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'
import { FcStart } from "react-icons/fc";
import axios from 'axios';

const AdminAllLinks = () => {
    const {allLinks}=useContext(ThemeContext)
    const Delete = (date) =>{
        axios.get(`/api/del/link?date=${date}`).then(res=>{
            if(res.data.success==true)
            {
                alert('Link document del')
            }else{
                alert('Error try again ):')
            }
        })
    }
    return (
    <>
    <div className='AdminWorksheet-body'>
    <main className="table">
    <section className="table__header">
        </section>
        <section className="table__body">
            <table>
                        
                    <thead>
                    <tr>
                        <th> ID </th>
                        <th> Time </th>
                        <th> Date </th>
                        <th className='work-start'> Delete</th>
                    </tr>
                </thead>
                {allLinks && allLinks.map((item)=>(
                    <>
                 <tbody key={item._id}>
                
                <tr>
                    <td> {item._id}</td>
                    <td> {item.createdAt}</td>
                    <td> {item.date}</td>
                    
                    
                    <td> <p onClick={(e)=>{Delete(item.date)}} className='WorkSheet-Icon-Alert'><FcStart/></p> </td>
                </tr>
                 
                    
            </tbody>
                          </>
                      ))}
            </table>
            </section>
        </main>
        </div>
    </>
  )
}

export default AdminAllLinks