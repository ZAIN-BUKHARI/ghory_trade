import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'
import { FcLeft } from "react-icons/fc";
import { useEffect } from 'react';
import axios from 'axios';

const history = () => {
    const {mobile,balance,history,setbalance,email} = useContext(ThemeContext)
    function getBlalance()
    {
      const data={email}
      axios.post('/api/get/balance',data).then(res=>{
        if(res.data.success==true)
        {
          setbalance(parseFloat(res.data.balance))
          // window.location.replace('/')
        }else{
          alert('server error try again')
        }
      })
    }
    useEffect(()=>{
    getBlalance()
    },[])
   
   


      if(!mobile)
    {

  return (
    
    <>
    <div className='Worksheet-body'>
    <main className="table">
    <section className="table__header">
        <h1 className='flex'><FcLeft  className='back-arr-mob-chart'/><strong className='strong-tag'> Withdrawal History </strong></h1>
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
       )
    }
       
      
    else{
      return (
      
        <>
        <div className='worksheet-flow'>
        <div className='Worksheet-body-mobile'>
        <main className="table">
        <section className="table__header">
        <h1 className='flex'><FcLeft onClick={()=>{router.push('/')}} className='back-arr-mob-chart'/><strong className='strong-tag'> Withdrawal History </strong></h1>

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
