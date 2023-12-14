import React from 'react'
import { FcRight } from "react-icons/fc";
import { FcHighPriority } from "react-icons/fc";

import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext'
import { useRouter } from 'next/router';
import Searchbar from '../universe.io/Searchbar';
import axios from 'axios';


const AdminPlans = () => {
    //use Context 
    const {adminallusers,usersearchresults,setLoader}=useContext(ThemeContext)
    //router
    const router = useRouter()
    
    
    const detail = (id) =>{
        var user = "user"
        router.push(`/admindetail?id=${id}&plan=${user}`)
    }
    const Update =(id)=>{
        
        router.push(`/adminupdate?id=${id}&model=user`)
    }
    const del = (Userid)=>{
        let confirmation = confirm('Are you sure. You want to delete document')
        if(confirmation)
            axios.post('/api/del/delone',{Userid}).then(res=>{window.location.reload()})
        
    
    }


  return (
    <>
    <Searchbar/>
    {usersearchresults=='' && (

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
                        <th> Amount </th>
                        <th> Plan </th>
                        <th className='work-start'> Details</th>
                        <th className='work-start'> Update</th>
                        {/* <th className='work-start'> Delete</th> */}
                        <th className='work-start'> Index</th>
                    </tr>
                </thead>
                {adminallusers && adminallusers.map((item,index)=>(
                    <>
                <tbody key={item._id}>
                
                    <tr>
                        <td className='nameAndemailSize'> {item.firstname} </td>
                        <td className='nameAndemailSize'>{item.email}</td>
                        <td > {item.createdAt.slice(0,10).slice(2)} </td>
                        
                        <td> <spna className="dollarColor">$</spna><strong >  {item.balance.toString().slice(0,7)} </strong></td>
                        {/* <td className=''> */}
                        <td> {item.subscription} </td>
                        
                    
                        {/* </td> */}
                        <td> <p onClick={(e)=>{detail(item._id)}} className='WorkSheet-Icon-Alert'><FcRight/></p> </td>
                        <td> <p onClick={(e)=>{Update(item._id)}} className='WorkSheet-Icon-Alert'><FcRight/></p> </td>
                        {/* <td> <p onClick={(e)=>{del(item._id)}} className='WorkSheet-Icon-Alert'>🗑️</p> </td> */}
                        <td> <p  className='WorkSheet-Icon-Alert'>{index+1}</p> </td>
                    </tr>
                     
                        
                </tbody>
                          </>
                      ))}
            </table>
            </section>
        </main>          
        </div>

        )}
        {usersearchresults!=0 && usersearchresults!=undefined && (
            <>
            <div className='AdminWorksheet-body'>
    <main className="table">
    <section className="table__header">
        </section>
        <section className="table__body">
            <table>
                        
                    <thead>
                    <tr>
                        {/* <th> ID </th> */}
                        <th> Customer </th>
                        <th> Address </th>
                        <th> Join</th>
                        {/* <th> Today-Work</th> */}
                        <th> Amount </th>
                        <th> Status </th>
                        <th className='work-start'> Details</th>
                        <th className='work-start'> Update</th>
                    </tr>
                </thead>
                {usersearchresults && usersearchresults.map((item)=>(
                    <>
                <tbody key={item._id}>
                
                    <tr>
                        {/* <td> {item._id.slice(0,5)} </td> */}
                        <td> {item.firstname} </td>
                        <td >{item.email}</td>
                        <td> {item.createdAt.slice(0,10)} </td>
                        {/* <td> {item.todaywork} </td> */}
                        
                        <td> <strong> $ {item.balance} </strong></td>
                        <td> {item.subscription} </td>
                        
                    
                        <td> <p onClick={(e)=>{detail(item._id)}} className='WorkSheet-Icon-Alert'><FcRight/></p> </td>
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
        .dollarColor{
            color:green
        }
        .nameAndemailSize{
            font-size:11px;
        }
        `}</style>
    </>
  )
}

export default AdminPlans