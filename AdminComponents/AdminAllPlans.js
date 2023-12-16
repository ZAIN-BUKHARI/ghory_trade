import React from 'react'
import { FcRight } from "react-icons/fc";
import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext'
import { useRouter } from 'next/router';
import Searchbar from '../universe.io/Searchbar'
import axios from 'axios';

const AdminPlans = () => {
    //use Context 
    const {adminallplans,planssearchresults}=useContext(ThemeContext)
    //router
    const router = useRouter()
    
    
    const detail = (id) =>{
        router.push(`/admindetail?id=${id}&plan=join`)
    }
    const Update =(id)=>{
        
        router.push(`/adminupdate?id=${id}&model=plan`)
    }
    const del = (Userid)=>{
        let confirmation = confirm('Are you sure. You want to delete document')
        if(confirmation)
            axios.get(`/api/del/delone?Userid=${Userid}`).then(res=>{window.location.reload()})
        
    
    }


  return (
    <>
    <Searchbar/>
    {planssearchresults=='' && (
    <div className='AdminWorksheet-body'>
    <main className="table">
    <section className="table__header">
        </section>
        <section className="table__body">
            <table>
                        
                    <thead>
                    <tr>
                        <th> Name </th>
                        <th> Email </th>
                        <th> Join</th>
                        <th> Level</th>
                        <th> Investment </th>
                        <th> Status </th>
                        <th className='work-start'> Details</th>
                        <th className='work-start'> Update</th>
                        <th className='work-start'> Index</th>
                    </tr>
                </thead>
                {adminallplans && adminallplans.map((item,index)=>(
                    <>
                 <tbody key={item._id}>
                
                <tr>
                    <td> {item._id.slice(0,5)} </td>
                    <td> {item.name} </td>
                    <td>{item.email}</td>
                    <td> {item.date} </td>
                    <td> {item.level} </td>
                    
                    <td> <strong> ${item.investment} </strong></td>
                    <td className=''>
                    
                    <td> {item.status} </td>
                    </td>
                    <td> <p onClick={(e)=>{detail(item._id)}} className='WorkSheet-Icon-Alert'><FcRight/></p> </td>
                    <td> <p onClick={(e)=>{Update(item._id)}} className='WorkSheet-Icon-Alert'><FcRight/></p> </td>
                    <td> <p  className='WorkSheet-Icon-Alert'>{index+1}</p> </td>
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
                        {/* <th> Name </th> */}
                        <th> Email </th>
                        <th> Join</th>
                        {/* <th> Level</th> */}
                        <th> Investment </th>
                        <th> Status </th>
                        <th className='work-start'> Details</th>
                        <th className='work-start'> Update</th>
                        <th className='work-start'> Delete</th>
                        <th className='work-start'> Index</th>
                    </tr>
                </thead>
                {planssearchresults && planssearchresults.map((item,index)=>(
                    <>
                 <tbody key={item._id}>
                
                <tr>
                    {/* <td> {item.name.slice(0,15)} </td> */}
                    <td>{item.email}</td>
                    <td> {item.date} </td>
                    {/* <td> {item.level} </td> */}
                    
                    <td> <strong> ${item.investment} </strong></td>
                    <td className=''>
                    
                    <td> {item.status} </td>
                    </td>
                    <td> <p onClick={(e)=>{detail(item._id)}} className='WorkSheet-Icon-Alert'><FcRight/></p> </td>
                    <td> <p onClick={(e)=>{Update(item._id)}} className='WorkSheet-Icon-Alert'><FcRight/></p> </td>
                    <td> <p onClick={(e)=>{del(item._id)}} className='WorkSheet-Icon-Alert'>🗑️</p> </td>
                    <td> <p  className='WorkSheet-Icon-Alert'>{index+1}</p> </td>
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