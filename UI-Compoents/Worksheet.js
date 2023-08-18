import React from 'react'
import { FcHighPriority } from "react-icons/fc";
import { FcOk } from "react-icons/fc";
import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext'
const Worksheet = () => {
    //use Context 
    const {balance,router}=useContext(ThemeContext)
    const startWork = () =>{
        router.push('/dailywork')
    }
  return (
    <>
    <div className='Worksheet-body'>
    <main class="table">
    <section class="table__header">
            <h1>Daily Assignments</h1>
            <h1 className='WORK-WALLET'>Wallet {balance}$</h1>
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
                        <th> Day </th>
                        <th> Customer </th>
                        <th> work Assign</th>
                        <th> Deadline</th>
                        <th className='work-start'> Status</th>
                        <th> Amount </th>
                        <th className='work-start'> Start</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> 1 </td>
                        <td> Zain </td>
                        <td> 17 Dec, 2022 </td>
                        <td> 12:01pm </td>
                        <td>
                            <p class=" WorkSheet-Icon-Alert ">
                               <FcHighPriority/>
                               {/* <FcOk/> */}
                            </p>
                        </td>
                        <td> <strong> $0.67 </strong></td>
                        <td> <p onClick={startWork} class="Done">Start</p> </td>
                    </tr>
                     
                </tbody>
            </table>
        </section>
        </main>
        </div>
    </>
  )
}

export default Worksheet