import React, { useEffect, useState } from 'react'
import { FcHighPriority } from "react-icons/fc";
import { FcRight } from "react-icons/fc";

import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext'
import { useRouter } from 'next/router';
import Searchbar from '../universe.io/Searchbar'


const AdminAllRequests = () => {
    //use Context 
    const {allrequests,searchrequestresults}=useContext(ThemeContext)
    //router
    const router = useRouter()
    
    
    
    const Update =(id)=>{
        
        router.push(`/adminupdate?id=${id}&model=request`)
    }


  return (
    <>
    <Searchbar/>
    {searchrequestresults=='' && (
    <div className='AdminWorksheet-body'>
    <main className="table">
    <section className="table__header">
        </section>
        <section className="table__body">
            <table>
                        
                    <thead>
                    <tr>
                        <th> ID </th>
                        <th> Email </th>
                        <th> Method </th>
                        <th> Amount </th>
                        <th> Address</th>
                        <th> Join</th>
                        <th> Status </th>
                        <th className='work-start'> Update</th>
                    </tr>
                </thead>
                {allrequests && allrequests.map((item)=>(
                    <>
                 <tbody key={item._id}>
                
                <tr>
                    <td> {item._id.slice(0,5)} </td>
                    <td>{item.email}</td>
                    <td> {item.method} </td>
                    <td><strong> ${item.amount} </strong> </td>
                    <td> {item.address} </td>
                    <td> {item.createdAt.slice(0,10)} </td>
                    <td> {item.status} </td>
                    
                    
                    <td> <p onClick={(e)=>{Update(item._id)}} className='WorkSheet-Icon-Alert'><FcRight/></p> </td>
                </tr>
                 
                    
            </tbody>
                          </>
                      ))}
            </table>
            </section>
        </main>
        </div>)}
        {searchrequestresults!=0 &&(
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
                        <th> Email </th>
                        <th> Method </th>
                        <th> Amount </th>
                        <th> Address</th>
                        <th> Join</th>
                        <th> Status </th>
                        <th className='work-start'> Update</th>
                    </tr>
                </thead>
                {searchrequestresults && searchrequestresults.map((item)=>(
                    <>
                    <tbody key={item._id}>
                   
                   <tr>
                       <td> {item._id.slice(0,5)} </td>
                       <td>{item.email}</td>
                       <td> {item.method} </td>
                       <td><strong> ${item.amount} </strong> </td>
                       <td> {item.address} </td>
                       <td> {item.createdAt.slice(0,10)} </td>
                       <td> {item.status} </td>
                       
                       
                       <td> <p onClick={(e)=>{Update(item._id)}} className='WorkSheet-Icon-Alert'><FcRight/></p> </td>
                   </tr>
                    
                       
               </tbody>
                             </>
                      ))}
            </table>
            </section>
        </main>
        </div>
            </>
        )}
        <style>{`
        .Left{
            font-size: 20px;
    cursor: pointer;
    margin-left: 10px;
        }
        // .admin-sheet-reviewed{
        //     color:green;
        //     font-weight:bold;
        // }
        // .admin-sheet-review{
        //     font-weight:bold;
        //     color:red;
        // }
        // .Admin-select{
        //     outline:none;
        //     color:green;
        // }
        `}</style>
    </>
  )
}

export default AdminAllRequests