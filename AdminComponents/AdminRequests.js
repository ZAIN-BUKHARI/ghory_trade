import React, { useEffect,useState,useContext } from 'react'
import { FcHighPriority } from "react-icons/fc";
import { FcRight } from "react-icons/fc";
import { ThemeContext } from '../Context/ThemeContext'
import axios from 'axios';


const AdminRequests = () => {
    //use Context 
    const {router,requests,setLoader}=useContext(ThemeContext)
   
    
//state variables
const [status,setstatus]=useState("")
const [conditionStatus,setConditionstatus]=useState("")
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
    setLoader(true)
    let res = await axios.get(`/api/admin/requeststatus?_id=${id}&status=${conditionStatus}`)
        setLoader(false)
        window.location.reload()
    
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
                        {status=='rejected' || status=='verified' &&  <th> Status </th>}
                       {status=='rejected' && status!='verified' && <th> Address </th>}
                        <th>Date</th>
                        {/* <th> Level</th> */}
                        <th> Amount </th>
                        <th> Method </th>
                       { <th> Bank </th>}
                       {status!='rejected' && status!='verified' && <th> Update </th>}
                       {status!='rejected' && status!='verified' && <th> Status </th>}
                       {status!='rejected' && status!='verified' && <th className='work-start'> Details</th>}
                    </tr>
                </thead>
                {requests.map((item)=>(
                    <>
                <tbody key={item._id}>
                
                    <tr>
                        <td> {item._id} </td>
                        <td>{item.email}</td>
                       {status=='rejected' || status=='verified' && <td>{item.status}</td>}
                       {status=='rejected' && status!='verified' && <td>{item.address}</td>}
                        <td>{item.createdAt.slice(0,10)}</td>
                        
                        <td> <strong> ${item.amount} </strong></td>
                        <td> <strong> {item.method} </strong></td>
                        <td>{item.bankname!=""?item.bankname:'no'}</td>
                        {status!='rejected' && status!='verified' &&  <td className=''>
                      <select 
                      name="select"
                      className="Admin-select"
                      value={conditionStatus}
                    onChange={(e)=>{setConditionstatus(e.target.value)}}
                      >
                    {status=="verified" &&  (
                        <>
                         <option className='admin-sheet-reviewed option-one' value={"verified"}>verified</option>
                         <option className='admin-sheet-reviewed option-two' value={"pending"}>pending</option>
                         <option className='admin-sheet-review option-three' value={"rejected"}>rejected</option>
                        </>
                    )}
                    {status=="pending" && (
                        <>
                         <option className='admin-sheet-reviewed option-two' value={"pending"}>pending</option>
                         <option className='admin-sheet-reviewed option-one' value={"verified"}>verified</option>
                         <option className='admin-sheet-review   option-three' value={"rejected"}>rejected</option>
                        </>
                    )}
                    {status=="rejected" && (
                        <>
                         <option className=' admin-sheet-review option-three' value={"rejected"}>rejected</option>
                         <option className='admin-sheet-reviewed option-two' value={"pending"}>pending</option>
                         <option className='admin-sheet-reviewed option-one' value={"verified"}>verified</option>
                        </>
                    )}
                     
                    </select>
                        </td>}
                      {status!='rejected'&& status!='verified' &&  <td > <p onClick={()=>{startWork(item._id)}} className='left'><FcRight /></p> </td>}
                      {status!='rejected'&& status!='verified' && <td> <p onClick={(e)=>{detail(item._id)}} className='WorkSheet-Icon-Alert'><FcRight/></p> </td>}
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
            border:2px solid black;
            background:white !important;
            color:green;
            font-weight:bold;
        }
        .admin-sheet-review{
            background:white !important;
            border:2px solid black;
            font-weight:bold;
            color:red;
        }
        .Admin-select{
            background:white !important;
            border:2px solid black;
            outline:none;
            color:green;
        }
        `}</style>
    </>
  )
}

export default AdminRequests