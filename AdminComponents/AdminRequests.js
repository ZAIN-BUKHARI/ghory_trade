import React, { useEffect,useState,useContext } from 'react'
import { FcHighPriority } from "react-icons/fc";
import { FcRight } from "react-icons/fc";
import { ThemeContext } from '../Context/ThemeContext'
import axios from 'axios';


const AdminRequests = () => {
    //use Context 
    const {router,requests}=useContext(ThemeContext)
   
    
//state variables
const [status,setstatus]=useState("")
//useEffect for checking path and set status default 
useEffect(()=>{
    if(router.asPath=="/adminrecent")
        setstatus("verified")
    else if(router.asPath=="/adminwithdrawals")
        setstatus("pending")
    else if(router.asPath=="/adminreject")
        setstatus("rejected")
},[])

const startWork = (id) =>{
    api(id)
}
const detail = (id) =>{
    router.push(`/admindetail?id=${id}&plan=request`)
}
async function api(id){
    let res = await axios.get(`/api/admin/requeststatus?_id=${id}&status=${status}`)
    if(res.data.success==true){
            window.location.reload()
    }else{
        alert('Server error contact site developer for this issue')
    }
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
                        {/* <th> Customer </th> */}
                        <th> email </th>
                        <th> Join</th>
                        {/* <th> Level</th> */}
                        <th> Amount </th>
                        <th> Method </th>
                        <th> Update </th>
                        <th> Status </th>
                        <th className='work-start'> Details</th>
                    </tr>
                </thead>
                {requests.map((item)=>(
                    <>
                <tbody key={item._id}>
                
                    <tr>
                        <td> {item._id.slice(0,5)} </td>
                        {/* <td> {item.name} </td> */}
                        <td>{item.email}</td>
                        <td>{item.createdAt.slice(0,10)}</td>
                        {/* <td> 1 </td> */}
                        
                        <td> <strong> ${item.amount} </strong></td>
                        <td> <strong> {item.method} </strong></td>
                        <td className=''>
                        <select 
                      name="select"
                      className="Admin-select"
                      value={status}
                    onChange={(e)=>{setstatus(e.target.value)}}
                      >
                    {status=="verified" && (
                        <>
                         <option className='admin-sheet-reviewed' value={"verified"}>verified</option>
                         <option className='admin-sheet-reviewed' value={"pending"}>pending</option>
                         <option className='admin-sheet-review' value={"rejected"}>rejected</option>
                        </>
                    )}
                    {status=="pending" && (
                        <>
                         <option className='admin-sheet-reviewed' value={"pending"}>pending</option>
                         <option className='admin-sheet-reviewed' value={"verified"}>verified</option>
                         <option className='admin-sheet-review' value={"rejected"}>rejected</option>
                        </>
                    )}
                    {status=="rejected" && (
                        <>
                         <option className='admin-sheet-review' value={"rejected"}>rejected</option>
                         <option className='admin-sheet-reviewed' value={"pending"}>pending</option>
                         <option className='admin-sheet-reviewed' value={"verified"}>verified</option>
                        </>
                    )}
                     
                    </select>
                        </td>
                        <td > <p onClick={()=>{startWork(item._id)}} className='left'><FcRight /></p> </td>
                        <td> <p onClick={(e)=>{detail(item._id)}} className='WorkSheet-Icon-Alert'><FcRight/></p> </td>
                    </tr>
                     
                        
                </tbody>
                          </>
                      ))}
            </table>
            </section>
        </main>
        </div>
        <style>{`
        .left{
            font-size: 20px;
    cursor: pointer;
    margin-left: 10px;
        }
        .admin-sheet-reviewed{
            color:green;
            font-weight:bold;
        }
        .admin-sheet-review{
            font-weight:bold;
            color:red;
        }
        .Admin-select{
            outline:none;
            color:green;
        }
        `}</style>
    </>
  )
}

export default AdminRequests