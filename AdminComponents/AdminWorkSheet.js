import React from 'react'
import { FcHighPriority } from "react-icons/fc";
import { FcRight } from "react-icons/fc";

import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext'
const AdminWorkSheet = () => {
    //use Context 
    const {balance,router,customers}=useContext(ThemeContext)
    const startWork = () =>{
        router.push('/admindetail')
    }
  return (
    <>
    <div className='AdminWorksheet-body'>
    <main class="table">
    <section class="table__header">
            {/* <h1>Daily Assignments</h1> */}
            {/* <h1 className='WORK-WALLET'>Wallet {balance}$</h1> */}
            {/* <div class="input-group">
                <input type="search" placeholder="Search Data..."/>
                <img src="images/search.png" alt=""/>
            </div> */}
            {/* <div class="export__file">
                <label for="export-file" class="export__file-btn" title="Export File"></label>
                <input type="checkbox" id="export-file"/> */}
                {/* <div class="export__file-options">
                    <label>Export As &nbsp; &#10140;</label>
                    <label for="export-file" id="toPDF">PDF <img src="images/pdf.png" alt=""/></label>
                    <label for="export-file" id="toJSON">JSON <img src="images/json.png" alt=""/></label>
                    <label for="export-file" id="toCSV">CSV <img src="images/csv.png" alt=""/></label>
                    <label for="export-file" id="toEXCEL">EXCEL <img src="images/excel.png" alt=""/></label>
                </div> */}
            {/* </div> */}
        </section>
        <section class="table__body">

                <table>
                <thead>
            
                    <tr>
                        <th> ID </th>
                        <th> Customer </th>
                        <th> email </th>
                        <th> Join</th>
                        <th> Level</th>
                        <th> Investent </th>
                        <th> Status </th>
                        <th className='work-start'> Details</th>
                    </tr>
                </thead>
                {customers.map((item)=>(
                <tbody>
                    <tr>
                        <td> 1 </td>
                        <td> {item.name} </td>
                        <td> {item.email}</td>
                        <td> 17 Dec, 2022 </td>
                        <td> 1 </td>
                        
                        <td> <strong> ${item.investment} </strong></td>
                        <td className='admin-sheet-reviewed'> <strong> reviewd </strong></td>
                        <td> <p onClick={startWork} className='WorkSheet-Icon-Alert'><FcRight/></p> </td>
                    </tr>
                </tbody>
                ))}
            </table>
        </section>
        </main>
        </div>
        <style>{`
        .admin-sheet-reviewed{
            color:green;
        }
        .admin-sheet-review{
            color:red;
        }
        `}</style>
    </>
  )
}

export default AdminWorkSheet