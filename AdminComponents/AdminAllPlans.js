import React, { useEffect, useState } from 'react'
import { FcHighPriority } from "react-icons/fc";
import { FcRight } from "react-icons/fc";

import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext'
import { useRouter } from 'next/router';
import Searchbar from '../universe.io/Searchbar'


const AdminPlans = () => {
    //use Context 
    const {adminallplans,planssearchresults}=useContext(ThemeContext)
    //router
    const router = useRouter()
    
    
    const detail = (id) =>{
        router.push(`/admindetail?id=${id}&plan=join`)
    }


  return (
    <>
    <Searchbar/>
    {planssearchresults.length==0 && (
    <div className='AdminWorksheet-body'>
    <main className="table">
    <section className="table__header">
        </section>
        <section className="table__body">
            <table>
                        
                    <thead>
                    <tr>
                        <th> ID </th>
                        <th> Name </th>
                        <th> Email </th>
                        <th> Join</th>
                        <th> Level</th>
                        <th> Investment </th>
                        <th> Status </th>
                        <th className='work-start'> Details</th>
                    </tr>
                </thead>
                {adminallplans && adminallplans.map((item)=>(
                    <>
                 <tbody key={item._id}>
                
                <tr>
                    <td> {item._id.slice(0,5)} </td>
                    <td> {item.name} </td>
                    <td>{item.email}</td>
                    <td> {item.createdAt.slice(0,10)} </td>
                    <td> {item.level} </td>
                    
                    <td> <strong> ${item.investment} </strong></td>
                    <td className=''>
                    
                    <td> {item.status} </td>
                    </td>
                    <td> <p onClick={(e)=>{detail(item._id)}} className='WorkSheet-Icon-Alert'><FcRight/></p> </td>
                </tr>
                 
                    
            </tbody>
                          </>
                      ))}
            </table>
            </section>
        </main>
        </div>)}
        {planssearchresults &&(
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
                        <th> Name </th>
                        <th> Email </th>
                        <th> Join</th>
                        <th> Level</th>
                        <th> Investment </th>
                        <th> Status </th>
                        <th className='work-start'> Details</th>
                    </tr>
                </thead>
                {planssearchresults && planssearchresults.map((item)=>(
                    <>
                 <tbody key={item._id}>
                
                <tr>
                    <td> {item._id.slice(0,5)} </td>
                    <td> {item.name} </td>
                    <td>{item.email}</td>
                    <td> {item.createdAt.slice(0,10)} </td>
                    <td> {item.level} </td>
                    
                    <td> <strong> ${item.investment} </strong></td>
                    <td className=''>
                    
                    <td> {item.status} </td>
                    </td>
                    <td> <p onClick={(e)=>{detail(item._id)}} className='WorkSheet-Icon-Alert'><FcRight/></p> </td>
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

export default AdminPlans