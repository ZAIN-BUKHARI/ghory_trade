import React from 'react'
import Chart from '../MappingData/Chart'
import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'

const Worksheet = () => {
    const {mobile}=useContext(ThemeContext)
   
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
    <div className='worksheet-flow'>
    <div className='Worksheet-body-mobile'>
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
                 {Chart.map((item)=>{
                    


                   return  <tbody>

                <hr className='Chart-divider'/> 
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
        </div>
       </>
       
    
  )
}
}

export default Worksheet