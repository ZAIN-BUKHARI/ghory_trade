import React, { useContext, useEffect } from 'react'
import Qrscan from '../Components/Qrscan/Qrscan'
import { ThemeContext } from '../Context/ThemeContext'

const invite = () => {
  const {sethideSidebar,hideSidebar,mobile} = useContext(ThemeContext)
  useEffect(()=>{
    if(mobile && hideSidebar)
      {
        sethideSidebar(false)
      }
  },[])
  return (
    <Qrscan/>
  )
}

export default invite