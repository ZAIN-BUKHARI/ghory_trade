import axios from 'axios'
import React,{ useContext, useState} from 'react'
import { useEffect } from 'react'
import { ThemeContext } from '../Context/ThemeContext'
import { FcUndo } from "react-icons/fc";

const converter = () => {
  const [USD,setUSD]=useState(0)
  const [PKR,setPKR]=useState('PKR')
  const [investment,setinvestment]=useState('investment')
  const [rate,seterate]=useState(0)
  const {sethideSidebar,hideSidebar,mobile} = useContext(ThemeContext)
  useEffect(()=>{
    if(mobile && hideSidebar)
    {
      sethideSidebar(false)
    }
    axios.get('/api/rate/get').then(res=>{
      seterate(res.data.rate.Rate)
    }).catch(e=>{
      alert('server down')
    })
  },[])
  
  const changeAmountRate = () =>
  {
      setPKR(USD*rate)
  }
  const [oneday,setoneday]=useState(0)
  const [onemonth,setonemonth]=useState(0)
  const [twomonth,settwomonth]=useState(0)
  const [sixmonth,setsixmonth]=useState(0)
  const [year,setyear]=useState(0)
  const reset = () =>{
    setoneday('')
    settwomonth('')
    setoneday('')
    setsixmonth('')
    setyear('')
  }
  const investmentPlan = () =>{
    setoneday(((investment*20)/100)/30)
    settwomonth((investment*20)/100)
    setonemonth(((investment*20)/100)*2)
    setsixmonth(((investment*20)/100)*6)
    setyear(((investment*20)/100)*12)
  }
  return(
    <>
    <style>{`
    
    `}</style>
    <div className='currency-body flex flex-col'>
          {/* currency calculator  */}
          <div className='currency-white-box'>
            <h1 className='currency-from convert-heading'>Convert Your Currency</h1>
            <h1 className='currency-from'>From</h1>
            <input onChange={(e)=>{setUSD(e.target.value)}} className='currency-input-usd' placeholder='USD'/>
            <h1 className='currency-To'>To</h1>
            <input value={PKR} readOnly className='currency-input-pkr' placeholder='PKR'/>
            <div className="button currency-button" onClick={changeAmountRate}>
                 <input className='currency-btn-input' type="submit" value="Convert"   />
              </div>
          </div>
          {/* //Profit calculator  */}
          <div className='currency-white-box'>
          {oneday==0 &&<> <h1 className='currency-from convert-heading'>Profit Plan </h1>
            {/* <h1 className='currency-from'>Investment</h1> */}
            <input onChange={(e)=>{setinvestment(e.target.value)}} type='number' className='currency-input-usd' placeholder='Investment'/>
            <div className="button currency-button" onClick={investmentPlan}>
                 <input className='currency-btn-input' type="submit" value="Convert"   />
              </div></>}
              {oneday!=0 && <h1 className='reset-calculator flex'>Reset calculator <FcUndo onClick={reset} className='reset-calculator'/> </h1>}
             {oneday!=0 &&  <table>
                <thead>
                    <tr>
                        <th> 1day   </th>
                        <th> 1month </th>
                        <th> 2month </th>
                        <th> sixmonth</th>
                        <th> year</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{oneday}  </td>
                        <td>{onemonth} </td>
                        <td>{twomonth} </td>
                        <td>{sixmonth} </td>
                        <td>{year}</td>
                      </tr> 
                </tbody>
            </table>}
          </div>
          
    </div>
    </>
  )
}

export default converter