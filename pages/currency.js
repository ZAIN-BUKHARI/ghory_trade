import React,{useContext, useState} from 'react'
import { ThemeContext } from '../Context/ThemeContext'

const converter = () => {
  const {rate} = useContext(ThemeContext)
  const [USD,setUSD]=useState(0)
  const [PKR,setPKR]=useState(0)

  const changeAmountRate = () =>
  {
      setPKR(Math.floor(rate*USD))
  }
 
  return (
    <>
    <div className="PlanForm-Head">
        <div className="Invest-Container currecny-head-height">
         
          <div className="content">
            <form action='#'>
              <div className="user-details">
               
               
                
               
                
               
                <div className="input-box">
                  <span className="details">FROM</span>
                  <div className="flex">
                    <select
                      name="select"
                      className="PlanForm-select"
                    >
                      <option value={"USD"}>USD</option>
                    </select>
                    <input
                      type="number"
                      onChange={(e)=>{setUSD(e.target.value)}}
                      name="usd"
                      placeholder="$0"
                    />
                  </div>
                 
                  
                </div>
                <div className="input-box">
                  <span className="details">TO</span>
                  <div className="flex">
                    <select
                      name="select"
                      className="PlanForm-select"
                    >
                      <option value={"PKR"}>PKR</option>
                    </select>
                    <input
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