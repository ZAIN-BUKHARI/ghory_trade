import React,{useEffect} from 'react'
import Chart from '../MappingData/Chart'
import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'
import { FcLeft } from "react-icons/fc";


const Worksheet = () => {
    const {mobile,sethideSidebar,router}=useContext(ThemeContext)
    useEffect(()=>{
      if(mobile)
        sethideSidebar(false) 
    },[])
    if(!mobile)
    {

  return (
    <>
    <>
    <div className='Worksheet-body'>
    <main className="table">
    <section className="table__header">
            <h1><strong className='strong-tag ghory-theme-color'>Ghory Trading Profit Chart </strong></h1>
            <h1 className='strong-tag ghory-theme-color'>Remark [<span className='chart-span'> The calculation has not been deducted the 5% fee on withdrawal</span>]</h1>
        </section>
        <section className="table__body">
            <table>
                <thead>
                    <tr className='chart-table-text'>
                        <th> Amount </th>
                        <th> 1day </th>
                        <th> 1month</th>
                        <th> 2month</th>
                        <th> 6month</th>
                        <th> 1year</th>
                    </tr>
                </thead>
                 {Chart.map((item,)=>{
                    


                   return  <tbody>

                <tr className='Chart-divider'/> 
                    <tr className='chart-table-text'>
                        <td>$ {item.invest} </td>
                        <td>$ {item.day} </td>
                        <td>$ {item.one}</td>
                        <td>$ {item.two}</td>
                        <td>$ {item.six}</td>
                        <td>$ {item.year}</td>                       
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
    <div className='Worksheet-flow'>
    <div className='Worksheet-body-mobile'>
    <main className="table">
    <section className="table__header">
            <h1 className='flex chart-mob-h1'><FcLeft onClick={()=>{router.push('/')}} className='back-arr-mob-chart'/><strong className=' ghory-theme-color'>Ghory Trading Profit Chart </strong></h1>
            <h1 className=' ghory-theme-color'>Remark [<span className='chart-span'> The calculation has not been deducted the 5% fee on withdrawal</span>]</h1>
        </section>
        <section className="table__body">
            <table>
                <thead>
                    <tr className='chart-table-text-mob'>
                        <th> Amount </th>
                        <th> 1day </th>
                        <th> 1month</th>
                        <th> 2month</th>
                        <th> 6month</th>
                        <th> 1year</th>
                    </tr>
                </thead>
                 {Chart.map((item)=>{
                    


                   return  <tbody>

                <hr className='Chart-divider'/> 
                    <tr className='chart-table-text-mob'>
                        <td>$ {item.invest} </td>
                        <td>$ {item.day} </td>
                        <td>$ {item.one}</td>
                        <td>$ {item.two}</td>
                        <td>$ {item.six}</td>
                        <td>$ {item.year}</td>
                    </tr>
                     
                </tbody>
                 
                }
                )} 

            </table>            
        </section>
        </main>
        </div>
        </div>
       </>
       
    
  )
}
}

export default Worksheet