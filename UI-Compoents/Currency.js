import React from 'react'
import axios from 'axios'
const Currency = () => {
  const convert = async() =>{
    
    let res=await axios.get(`http://api.exchangeratesapi.io/v1/latest?access_key=0c35753bd08f5bcbf79aec35c4708445`)
  }
  return (
    <>
    <button onClick={convert} >Click to convert</button>
    </>
  )
}

export default Currency