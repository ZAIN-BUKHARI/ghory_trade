import React from 'react'
import Chart from '../../MappingData/Chart'
import { useContext } from 'react'
import { ThemeContext } from '../../Context/ThemeContext'

const Charts = () => {
    const {mobile}=useContext(ThemeContext)
   
    if(!mobile)
    {

  return (
    <>
    <>
    <div className=' !bg-[#121212] pt-40 pb-5 '>
    <main className="ml-10 goldShadow mr-10 ">
    <section className="flex py-8 border-b border-[1px] border-[#ffdb1a] w-[100%] h-[10%]  bg-[#121212] items-center justify-between ">
            <h1><strong className='ml-5 text-3xl text-[#ffdb1a]  '>Ghory Trading Profit Chart </strong></h1>
            <h1 className='mr-5 text-3xl text-[#ffdb1a]'>Remark [<span className='text-3xl text-[#ffdb1a]'> The calculation has not been deducted the 5% fee on every withdrawal</span>]</h1>
        </section>
        <section className=" bg-[#121212] border-[1px] border-[#ffdb1a] text-[#ffdb1a] ">
            <table>
                <thead>
                    <tr className='text-2xl   border-b border-[1px] border-[#ffdb1a]'>
                        <th className='text-[#ffdb1a] hover:text-white hover:bg-[#aea158] bg-[#121212]'> Amount </th>
                        <th className='text-[#ffdb1a] hover:text-white hover:bg-[#aea158] bg-[#121212]'> 1day </th>
                        <th className='text-[#ffdb1a] hover:text-white hover:bg-[#aea158] bg-[#121212]'> 1month</th>
                        <th className='text-[#ffdb1a] hover:text-white hover:bg-[#aea158] bg-[#121212]'> 2month</th>
                        <th className='text-[#ffdb1a] hover:text-white hover:bg-[#aea158] bg-[#121212]'> 6month</th>
                        <th className='text-[#ffdb1a] hover:text-white hover:bg-[#aea158] bg-[#121212]'> 1year</th>
                    </tr>
                </thead>
                 {Chart.map((item,)=>{
                     


                   return  <tbody>

                <tr className=' border-b border-[1px] border-[#ffdb1a] '/> 
                    <tr className='chart-table-text '>
                        <td className='border-b border-[1px] border-[#ffdb1a] hover:bg-[#aea158] bg-[#121212]'>$ {item.invest} </td>
                        <td className='border-b border-[1px] border-[#ffdb1a] hover:bg-[#aea158] bg-[#121212]'>$ {item.day} </td>
                        <td className='border-b border-[1px] border-[#ffdb1a] hover:bg-[#aea158] bg-[#121212]'>$ {item.one}</td>
                        <td className='border-b border-[1px] border-[#ffdb1a] hover:bg-[#aea158] bg-[#121212]'>$ {item.two}</td>
                        <td className='border-b border-[1px] border-[#ffdb1a] hover:bg-[#aea158] bg-[#121212]'>$ {item.six}</td>
                        <td className='border-b border-[1px] border-[#ffdb1a] hover:bg-[#aea158] bg-[#121212]'>$ {item.year}</td>                       
                    </tr>
                </tbody>
                }
                )} 

            </table>            
        </section>
        </main>
        </div>
       </>
       </>
    
  )
}
else{
  return (
    
    <>
    <div className='!bg-[#121212] pt-[100px]  '>
    {/* <div className=''> */}
    <main className="scroll-x">
    {/* <section className="flex py-8 border-b border-[1px] border-[#ffdb1a] w-[100%] h-[10%]  bg-[#121212] items-center justify-between">
    <h1><strong className=' text-xl text-[#ffdb1a]  '>Ghory Trading Profit Chart </strong></h1>
            <h1 className='mr-5 text-3xl text-[#ffdb1a]'>Remark [<span className='text-3xl text-[#ffdb1a]'> The calculation has not been deducted the 5% fee on withdrawal</span>]</h1>
        </section> */}
        {/* <section className="bg-[#121212] border-[1px] border-[#ffdb1a] text-[#ffdb1a]"> */}
            <table className='bg-[#121212] mb-20 border-[1px] border-[#ffdb1a] text-[#ffdb1a]'>
                <thead>
                    <tr className='text-2xl   border-b border-[1px] border-[#ffdb1a]'>
                    <th className='text-[#ffdb1a] hover:text-white hover:bg-[#aea158] bg-[#121212]'> Amount </th>
                        <th className='text-[#ffdb1a] hover:text-white hover:bg-[#aea158] bg-[#121212]'> 1day </th>
                        <th className='text-[#ffdb1a] hover:text-white hover:bg-[#aea158] bg-[#121212]'> 1month</th>
                        <th className='text-[#ffdb1a] hover:text-white hover:bg-[#aea158] bg-[#121212]'> 2month</th>
                        <th className='text-[#ffdb1a] hover:text-white hover:bg-[#aea158] bg-[#121212]'> 6month</th>
                        <th className='text-[#ffdb1a] hover:text-white hover:bg-[#aea158] bg-[#121212]'> 1year</th>
                    </tr>
                </thead>
                 {Chart.map((item)=>{
                    


                   return  <tbody className='border-b border-[1px] border-[#ffdb1a]'>

                {/* <hr className='border-b border-[1px] border-[#ffdb1a]'/>  */}
                    <tr className='border-b border-[1px] border-[#ffdb1a]'>
                    <td className=' hover:bg-[#aea158]  bg-[#121212]'>$ {item.invest} </td>
                        <td className='border-b border-[1px] border-[#ffdb1a] hover:bg-[#aea158] bg-[#121212]'>$ {item.day} </td>
                        <td className='border-b border-[1px] border-[#ffdb1a] hover:bg-[#aea158] bg-[#121212]'>$ {item.one}</td>
                        <td className='border-b border-[1px] border-[#ffdb1a] hover:bg-[#aea158] bg-[#121212]'>$ {item.two}</td>
                        <td className='border-b border-[1px] border-[#ffdb1a] hover:bg-[#aea158] bg-[#121212]'>$ {item.six}</td>
                        <td className='border-b border-[1px] border-[#ffdb1a] hover:bg-[#aea158] bg-[#121212]'>$ {item.year}</td>  
                    </tr>
                     
                </tbody>
                 
                }
                )} 

            </table>            
        {/* </section> */}
        </main>
        {/* </div> */}
        </div>
       </>
       
    
  )
}
}

export default Charts