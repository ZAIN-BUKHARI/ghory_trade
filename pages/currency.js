import axios from 'axios'
import React,{ useContext, useState} from 'react'
import { useEffect } from 'react'
import { ThemeContext } from '../Context/ThemeContext'

const converter = () => {
  const [USD,setUSD]=useState(0)
  const [PKR,setPKR]=useState('PKR')
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
 
  return(
    <>
    <style>{`
    
    `}</style>
    <div className='currency-body'>
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
    </div>
    </>
  )
}

export default converter