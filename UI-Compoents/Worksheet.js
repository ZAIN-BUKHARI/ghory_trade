import React from 'react'
import { FcHighPriority } from "react-icons/fc";
import { FcOk } from "react-icons/fc";
import { useContext,useEffect } from 'react';
import { toast } from 'react-toastify';
import { ThemeContext } from '../Context/ThemeContext'
const Worksheet = () => {
    //use Context 
    const {balance,router,token,subscription,workStatus}=useContext(ThemeContext)
    const startWork = () =>{
        router.push('/dailywork')
    }
    useEffect(()=>{
        if(!token && subscription=="no")
        {
          router.push('/')
          toast.success("Not allowed here", {
            position: "top-right",
            autoClose: 30000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      },[])
  return (
    <>
    <div className='Worksheet-body'>
    <main className="table">
    <section className="table__header">
            <h1>Daily Assignments</h1>
            <h1 className='WORK-WALLET'>Wallet {balance}$</h1>
        </section>
        <section className="table__body">
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
                            <p className=" WorkSheet-Icon-Alert ">
                             {workStatus=="no"  && <FcHighPriority/>}
                             {workStatus=="yes" &&  <FcOk/> }
                            </p>
                        </td>
                        <td> <strong> $0.67 </strong></td>
                       {workStatus=="no" && <td> <p onClick={startWork} className="Done">Start</p> </td>}
                    </tr>
                     
                </tbody>
                {/* testing purpose for showing to client  */}
                {/* <tbody>
                    <tr>
                        <td> 1 </td>
                        <td> Zain </td>
                        <td> 17 Dec, 2022 </td>
                        <td> 12:01pm </td>
                        <td>
                            <p className=" WorkSheet-Icon-Alert ">
                               <FcHighPriority/>
                            </p>
                        </td>
                        <td> <strong> $0.67 </strong></td>
                        <td> <p  className="Done"><a href='https://www.youtube.com/@PakWheels'>start</a></p> </td>
                    </tr>
                     
                </tbody> */}
                {/* testing purpose for showing to client  */}
                {/* <tbody>
                    <tr>
                        <td> 1 </td>
                        <td> Zain </td>
                        <td> 17 Dec, 2022 </td>
                        <td> 12:01pm </td>
                        <td>
                            <p className=" WorkSheet-Icon-Alert ">
                               <FcHighPriority/>
                            </p>
                        </td>
                        <td> <strong> $0.67 </strong></td>
                        <td> <p  className="Done"><a href='https://www.youtube.com/watch?v=CCU2TPj4O5A'>start</a></p> </td>
                    </tr>
                     
                </tbody> */}
            </table>
        </section>
        </main>
        </div>
    </>
  )
}

export default Worksheet