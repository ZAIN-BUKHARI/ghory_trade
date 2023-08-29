import React from 'react'
import { FcRight } from "react-icons/fc";

import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext'
import { useRouter } from 'next/router';
import Searchbar from '../universe.io/Searchbar';


const AdminPlans = () => {
    //use Context 
    const {adminallusers,usersearchresults}=useContext(ThemeContext)
    //router
    const router = useRouter()
    
    
    const detail = (id) =>{
        var user = "user"
        router.push(`/admindetail?id=${id}&plan=${user}`)
    }
    const Update =(id)=>{
        
        router.push(`/adminupdate?id=${id}&model=user`)
    }


  return (
    <>
    <Searchbar/>
    {usersearchresults.length==0 && (

    <div className='AdminWorksheet-body'>
    <main className="table">
    <section className="table__header">
        </section>
        <section className="table__body">
            <table>
                        
                    <thead>
                    <tr>
                        <th> ID </th>
                        <th> Customer </th>
                        <th> Address </th>
                        <th> Join</th>
                        <th> Today-Work</th>
                        <th> Amount </th>
                        <th> Status </th>
                        <th className='work-start'> Details</th>
                        <th className='work-start'> Update</th>
                    </tr>
                </thead>
                {adminallusers && adminallusers.map((item)=>(
                    <>
                <tbody key={item._id}>
                
                    <tr>
                        <td> {item._id.slice(0,5)} </td>
                        <td> {item.firstname} </td>
                        <td>{item.email}</td>
                        <td> {item.createdAt.slice(0,10)} </td>
                        <td> {item.todaywork} </td>
                        
                        <td> <strong> $ {item.balance} </strong></td>
                        {/* <td className=''> */}
                        <td> <strong> {item.subscription} </strong></td>
                        
                    
                        {/* </td> */}
                        <td> <p onClick={(e)=>{detail(item._id)}} className='WorkSheet-Icon-Alert'><FcRight/></p> </td>
                        <td> <p onClick={(e)=>{Update(item._id)}} className='WorkSheet-Icon-Alert'><FcRight/></p> </td>
                    </tr>
                     
                        
                </tbody>
                          </>
                      ))}
            </table>
            </section>
        </main>          
        </div>)}
        {usersearchresults!=0 && (
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
                        <th> Customer </th>
                        <th> Address </th>
                        <th> Join</th>
                        <th> Today-Work</th>
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
                        <td> {item._id.slice(0,5)} </td>
                        <td> {item.firstname} </td>
                        <td>{item.email}</td>
                        <td> {item.createdAt.slice(0,10)} </td>
                        <td> {item.todaywork} </td>
                        
                        <td> <strong> $ {item.balance} </strong></td>
                        <td> <strong> {item.subscription} </strong></td>
                        
                    
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