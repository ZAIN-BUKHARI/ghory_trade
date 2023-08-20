import React, { useEffect, useState } from 'react'
import { FcHighPriority } from "react-icons/fc";
import { FcRight } from "react-icons/fc";

import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext'
import { useRouter } from 'next/router';
const AdminPlans = () => {
    //use Context 
    const {balance,customers}=useContext(ThemeContext)
    
    //router
    const router = useRouter()
    //state variables
    const [status,setstatus]=useState("")
    //useEffect for checking path and set status default 
    useEffect(()=>{
        if(router.asPath=="/adminview")
            setstatus("verified")
        else if(router.asPath=="/adminjoin")
            setstatus("pending")
        else if(router.asPath=="/adminplanreject")
            setstatus("rejected")
    },[])
    
    const startWork = () =>{
        // router.push('/admindetail')
        console.log(status)
    }

    const statusChanger = (e) =>{
        var value = e.target.value
        setstatus(e.target.value)
        if(value=="verified"){
            console.log("verified api call")
            // window.location.reload()
        }
        else if(value=="pending"){
            console.log("pending api call")
            // window.location.reload()

        }
        else if(value=="rejected"){
            console.log("rejected api call")
            // window.location.reload()

        }
    }
  return (
    <>
    <div className='AdminWorksheet-body'>
    <main className="table">
    <section className="table__header">
            {/* <h1>Daily Assignments</h1> */}
            {/* <h1 className='WORK-WALLET'>Wallet {balance}$</h1> */}
            {/* <div className="input-group">
                <input type="search" placeholder="Search Data..."/>
                <img src="images/search.png" alt=""/>
            </div> */}
            {/* <div className="export__file">
                <label for="export-file" className="export__file-btn" title="Export File"></label>
                <input type="checkbox" id="export-file"/> */}
                {/* <div className="export__file-options">
                    <label>Export As &nbsp; &#10140;</label>
                    <label for="export-file" id="toPDF">PDF <img src="images/pdf.png" alt=""/></label>
                    <label for="export-file" id="toJSON">JSON <img src="images/json.png" alt=""/></label>
                    <label for="export-file" id="toCSV">CSV <img src="images/csv.png" alt=""/></label>
                    <label for="export-file" id="toEXCEL">EXCEL <img src="images/excel.png" alt=""/></label>
                </div> */}
            {/* </div> */}
        </section>
        <section className="table__body">
            <table>
                        
                    <thead>
                    <tr>
                        <th> ID </th>
                        <th> Customer </th>
                        <th> Address </th>
                        <th> Join</th>
                        <th> Level</th>
                        <th> Amount </th>
                        <th> Status </th>
                        <th className='work-start'> Details</th>
                    </tr>
                </thead>
                {customers.map((item)=>(
                    <>
                <tbody>
                
                    <tr>
                        <td> 1 </td>
                        <td> Zain </td>
                        <td>{item.email}</td>
                        <td> 17 Dec, 2022 </td>
                        <td> 1 </td>
                        
                        <td> <strong> $200 </strong></td>
                        <td className=''>
                        <select 
                      name="select"
                      className="Admin-select"
                      value={status}
                      onChange={statusChanger}
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
                        <td> <p onClick={startWork} className='WorkSheet-Icon-Alert'><FcRight/></p> </td>
                    </tr>
                     
                        
                </tbody>
                          </>
                      ))}
            </table>
            </section>
        </main>
        </div>
        <style>{`
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

export default AdminPlans