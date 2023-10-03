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
  const [oneday,setoneday]=useState('')
  const [onemonth,setonemonth]=useState('')
  const [twomonth,settwomonth]=useState('')
  const [sixmonth,setsixmonth]=useState('')
  const [year,setyear]=useState('')
  const reset = () =>{
    setoneday('')
    settwomonth('')
    setoneday('')
    setsixmonth('')
    setyear('')
  }
  const investmentPlan = () =>{
    setoneday((((investment*20)/100)/30).toString())
    setonemonth((((investment*20)/100)*1).toString())
    settwomonth(((investment*20)/100*2).toString())
    setsixmonth((((investment*20)/100)*6).toString())
    setyear((((investment*20)/100)*12).toString())
  }
  if(!mobile)
  {

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
            <input onChange={(e)=>{setinvestment(e.target.value)}} type='number' className='currency-input-usd' placeholder='Investment'/>
            <div className="button currency-button" onClick={investmentPlan}>
                 <input className='currency-btn-input' type="submit" value="Convert"   />
              </div></>}
              {oneday!=0 && <h1 className='reset-calculator flex'>Reset calculator <FcUndo onClick={reset} className='reset-calculator'/> </h1>}
             {oneday!=0 && 
             <section className="table__body">
              <h1 className='profit-calculator-h1-tag'>1 Day--------------------------------------------------{oneday.slice(0,7)}$ </h1>
            <h1 className='profit-calculator-h1-tag'>  1 Month------------------------------------------------{onemonth}$ </h1>
            <h1 className='profit-calculator-h1-tag'>  2 Month------------------------------------------------{twomonth}$ </h1>
            <h1 className='profit-calculator-h1-tag'>  6 Month------------------------------------------------{sixmonth}$ </h1>
            <h1 className='profit-calculator-h1-tag'>  1 Year-------------------------------------------------{year}$ </h1>
            
            </section>}
          </div>
          
    </div>
    </>
  )
}else{
  return(
    <>
  <style>{`
   .table__body-mob{
    margin-bottom:200px;
   }
  `}</style>
  <div className='currency-body flex flex-col'>
        {/* currency calculator  */}
        <div className='currency-white-box-mobile'>
          <h1 className='currency-from convert-heading'>Convert Your Currency</h1>
          <h1 className='currency-from'>From</h1>
          <input onChange={(e)=>{setUSD(e.target.value)}} className='currency-input-usd-mobile' placeholder='USD'/>
          <h1 className='currency-To'>To</h1>
          <input value={PKR} readOnly className='currency-input-pkr-mobile' placeholder='PKR'/>
          <div className="button currency-button" onClick={changeAmountRate}>
               <input className='currency-btn-input-mob' type="submit" value="Convert"   />
            </div>
        </div>
        {/* //Profit calculator  */}
        <div className='currency-white-box-mobile'>
        {oneday=='' &&<> <h1 className='currency-from convert-heading'>Profit Plan </h1>
          <input onChange={(e)=>{setinvestment(e.target.value)}} type='number' className='currency-input-usd-mobile' placeholder='Investment'/>
          <div className="button currency-button" onClick={investmentPlan}>
               <input className='currency-btn-input-mob' type="submit" value="Convert"   />
            </div></>}
            {/* {oneday!='' && <h1 className='reset-calculator flex'>Reset calculator <FcUndo onClick={reset} className='reset-calculator'/> </h1>} */}
           {oneday!='' && 
            
           <section className="table__body-mob">
             <h1 className='reset-calculator flex'>Reset calculator <FcUndo onClick={reset} className='reset-calculator'/></h1>
            <h1 className='profit-calculator-h1-tag'>1 Day----------------------{oneday.slice(0,7)}$ </h1>
            <h1 className='profit-calculator-h1-tag'>1 Month--------------------{onemonth.slice(0,7)}$ </h1>
            <h1 className='profit-calculator-h1-tag'>2 Month--------------------{twomonth.slice(0,7)}$ </h1>
            <h1 className='profit-calculator-h1-tag'>6 Month--------------------{sixmonth.slice(0,7)}$ </h1>
            <h1 className='profit-calculator-h1-tag'>1 Year---------------------{year.slice(0,7)}$ </h1>
                    
          </section>}
        </div>
        
  </div>
  </>
)
}
}

export default converter