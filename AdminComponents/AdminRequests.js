import React, { useEffect } from 'react'
import { FcHighPriority } from "react-icons/fc";
import { FcRight } from "react-icons/fc";

import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext'
const AdminRequests = () => {
    //use Context 
    const {balance,router,requests}=useContext(ThemeContext)
    const startWork = () =>{
        router.push('/admindetail')
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
                {requests.map((item)=>(
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
                    //   onChange={ChangeEvent}
                      className="Admin-select"
                      >
                      <option className='admin-sheet-reviewed' value={"pending"}>pending</option>
                      <option className='admin-sheet-reviewed' value={"released"}>release</option>
                      <option className='admin-sheet-review' value={"rejected"}>rejected</option>
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

export default AdminRequests