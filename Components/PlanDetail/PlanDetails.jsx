import React from 'react'
import { useContext,useEffect } from 'react'
import { ThemeContext } from '../../Context/ThemeContext'


const PlanDetails = ({list}) => {
  const {setLoader} = useContext(ThemeContext)
  useEffect(()=>{
      setLoader(true)
      setTimeout(()=>{
          setLoader(false)
      },2000)
  },[])
    
    return (
    <>
    <div className='!bg-[#121212] !ml-[0px] mt-20 AdminWorksheet-body'>
    <main className="!bg-transparent goldShadow border-2 border-[#ffdb1a] shadow-2xl  !shadow-[#ffdb1a] table">
    <section className="!bg-transparent border-2 border-[#ffdb1a] table__header">
      <h1 className='text-[#ffdb1a] text-4xl font-bold pl-[500px]'>Plan Details</h1>
        </section>
        <section className="table__body">
            <table>
                        
                    <thead>
                    <tr className='border-b border-2 border-[#ffdb1a] !bg-transparent'>
                        <th className='bg-[#121212] text-[#ffdb1a]'> ID </th>
                        <th className='bg-[#121212] text-[#ffdb1a]'> Email </th>
                        <th className='bg-[#121212] text-[#ffdb1a]'> Investment </th>
                        <th className=' bg-[#121212] text-[#ffdb1a]'> Status</th>
                        <th className=' bg-[#121212] text-[#ffdb1a]'> Join</th>
                        <th className=' bg-[#121212] text-[#ffdb1a]'> End</th>
                    </tr>
                </thead>
                {list.map((item)=>(
                    <>
                 <tbody key={item._id}>
                
                <tr className='border-2 border-[#ffdb1a]'>
                    <td className=' bg-[#121212] text-[#ffdb1a] '> {item._id}</td>
                    <td className=' bg-[#121212] text-[#ffdb1a]'> {item.email}</td>
                    <td className=' bg-[#121212] text-[#ffdb1a]'> {item.investment}</td>
                    <td className=' bg-[#121212] text-[#ffdb1a]'> {item.status}</td>
                    <td className=' bg-[#121212] text-[#ffdb1a]'> {item.date}</td>   
                    <td className=' bg-[#121212] text-[#ffdb1a]'> {item.enddate}</td>   
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

export default PlanDetails