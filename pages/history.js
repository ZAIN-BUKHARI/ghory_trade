import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { ThemeContext } from '../Context/ThemeContext'
import axios from 'axios'
import { useEffect } from 'react'


const history = () => {
    const {mobile,balance,history} = useContext(ThemeContext)
   
   


      if(!mobile)
    {

  return (
    
    <>
    <div className='Worksheet-body'>
    <main className="table">
    <section className="table__header">
            <h1 className='WORK-WALLET'>Wallet {balance}$</h1>
        </section>
        <section className="table__body">
            <table>
                <thead>
                    <tr>
                        <th> Email </th>
                        <th> Amount </th>
                        <th> Address</th>
                        <th> Method</th>
                        <th> Date</th>
                        <th> Status</th>
                    </tr>
                </thead>
                 {history!=0 && history.map((item)=>{
                   return  <tbody>
                    <tr>
                        <td> {item.email}   </td>
                        <td> {item.amount}  </td>
                        <td> {item.address} </td>
                        <td> {item.method}  </td>
                        <td> {item.date}    </td>
                        <td> {item.status}  </td>
                    </tr>
                     
                </tbody>
                 }
                 )} 

            </table>
            
        </section>
        </main>
        </div>
       <style>{`
       .dim-btn{
        background-color:#f1807e;
        font-size:12px;
        color:black !important;
        width:200px;
        // cursor: none;

       }
       .strong-tag{
        font-size:20px;
       }
       .dim{
        width:200px;
       }
     
       `}</style>
       </>
       )}
       

       else{
       
       
         return (
           <>
           <div className='worksheet-flow'>
           <div className='Worksheet-body-mobile'>
           <main className="table">
           <section className="table__header">
                   <h1 className='WORK-WALLET '>Wallet {balance}$</h1>
               </section>
               <section className="table__body">
               <table>
                       <thead>
                           <tr>
                               <th> Email </th>
                               <th> Amount </th>
                               <th> Address</th>
                               <th> Method</th>
                               <th> Date</th>
                               <th> Status</th>
                           </tr>
                   </thead>
                        {history!=0 && history.map((item)=>{
                           <>
                          return  <tbody>
                           <tr>
                               <td> {item.email}   </td>
                               <td> {item.amount}  </td>
                               <td> {item.address} </td>
                               <td> {item.method}  </td>
                               <td> {item.date}    </td>
                               <td> {item.status}  </td>
                           </tr>
                            
                       </tbody>
                           </>
                        }
                        )} 
       
                   </table>
               </section>
               </main>
               </div>
               </div>
              <style>{`
              .dim-btn{
               background-color:#f1807e;
               font-size:12px;
               color:black !important;
               width:200px;
               // cursor: none;
       
              }
              .strong-tag{
               font-size:20px;
              }
              .dim{
               width:200px;
              }
            
              `}</style>
              </>  
         )
       
       }
}
    


export default history