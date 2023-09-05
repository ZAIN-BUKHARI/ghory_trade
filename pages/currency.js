import axios from 'axios'
import React,{ useState} from 'react'
import { useEffect } from 'react'

const converter = () => {
  const [USD,setUSD]=useState(0)
  const [PKR,setPKR]=useState(0)
  const [rate,seterate]=useState(0)
  useEffect(()=>{
    axios.get('/api/rate/get').then(res=>{
      seterate(res.data.rate.Rate)
    })
  },[])
  const changeAmountRate = () =>
  {
      setPKR(USD*rate)
  }
 
  return (
    <>
    <div className="PlanForm-Head ">
        <div className="Invest-Container  currecny-head-height">
         
          <div className="content ">
            <form action='#'>
              <div className="user-details currency-detail">
               
               
                
               
                
               
                <div className=" ">
                  <span className="details">FROM</span>
                  <div className="flex">
                    <select
                      name="select"
                      className="PlanForm-select"
                    >
                      <option value={"USD"}>USD</option>
                    </select>
                    <input
                    className='currency-input'
                      type="number"
                      onChange={(e)=>{setUSD(e.target.value)}}
                      name="usd"
                      placeholder="$0"
                    />
                  </div>
                 
                  
                </div>
                <div className=" ">
                  <span className="details">TO</span>
                  <div className="flex">
                    <select
                      name="select"
                      className="PlanForm-select"
                    >
                      <option value={"PKR"}>PKR</option>
                    </select>
                    <input
                    className='currency-input'
                      type="number"
                      name="investment"
                      placeholder="PKR"
                      value={PKR}
                      readOnly
                    />
                  </div>
                 
                  
                </div>
                
              </div>
            </form>
              <div className="button currency-button" onClick={changeAmountRate}>
                <input className='currency-btn-input' type="submit" value="Convert"   />
              </div>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default converter