import React from 'react'
import { useContext,useEffect,useState } from 'react'
import { ThemeContext } from '../../Context/ThemeContext'
import axios from 'axios'
import {useRouter} from 'next/router';
import { toast } from "react-toastify";
import HistoryMobile from '../../Responsiveness/HistoryMobile'
const History = () => {
    const router=useRouter()
    const {mobile,balance,setLoader} = useContext(ThemeContext)
    const [history,sethistory]=useState([])
    const getHistoryList=async()=>{
        setLoader(true)
        try{
        const email = localStorage.getItem('token')
        const res = await axios.get(`/api/get/history?email=${email}`)
            if(res.data.history!="no")
            {
              sethistory(res.data.history)
              setLoader(false)
            }else{
                setLoader(false)
             }
          
        }catch(e)
        {
            router.push('/')
            setLoader(false)
            toast.error("Network Error", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
            
        }
    }
     useEffect(()=>{
        getHistoryList()
         
     },[])
if(mobile)
{
    return <HistoryMobile list={history} />
}else{

    return (
    <>
    <div className='!bg-[#121212] !pb-5 !pt-12 !ml-[0px] mt-20 AdminWorksheet-body'>
    <main className="!bg-transparent goldShadow border-2 border-[#ffdb1a] shadow-2xl  !shadow-[#ffdb1a] table">
    <section className="!bg-transparent border-2 border-[#ffdb1a] table__header">
      <h1 className='text-[#ffdb1a] text-4xl font-bold pl-[500px]'>HISTORY</h1>
        </section>
        <section className="table__body">
            <table>
                        
                    <thead>
                    <tr className='border-b border-2 border-[#ffdb1a] !bg-transparent'>
                        <th className='bg-[#121212] text-[#ffdb1a]'> Email </th>
                        <th className='bg-[#121212] text-[#ffdb1a]'> amount </th>
                        <th className=' bg-[#121212] text-[#ffdb1a]'> address</th>
                        <th className=' bg-[#121212] text-[#ffdb1a]'> method</th>
                        <th className=' bg-[#121212] text-[#ffdb1a]'> date</th>
                        {/* <th className=' bg-[#121212] text-[#ffdb1a]'> screenshot</th> */}
                        <th className=' bg-[#121212] text-[#ffdb1a]'> status</th>
                    </tr>
                </thead>
                {history.map((item)=>(
                    <>
                 <tbody key={item._id}>
                
                <tr className='border-2 border-[#ffdb1a]'>
                    {/* <td className=' bg-[#121212] text-[#ffdb1a] '> {item._id}</td> */}
                    <td className=' bg-[#121212] text-[#ffdb1a]'> {item.email}</td>
                    <td className=' bg-[#121212] text-[#ffdb1a]'> {item.amount}</td>
                    <td className=' bg-[#121212] text-[#ffdb1a]'> {item.address}</td>
                    <td className=' bg-[#121212] text-[#ffdb1a]'> {item.method}</td>   
                    <td className=' bg-[#121212] text-[#ffdb1a]'> {item.date}</td>   
                    {/* <td className=' bg-[#121212] text-[#ffdb1a]'> {item.screenshot}</td>    */}
                    <td className=' bg-[#121212] text-[#ffdb1a]'> {item.status}</td>   
               </tr>
                 
                    
            </tbody>
                          </>
                      ))}
            </table>
            </section>
        </main>
        </div>
    </>
  )
}

}

export default History