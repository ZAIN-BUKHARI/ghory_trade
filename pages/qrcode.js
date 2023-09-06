import React, { useContext, useEffect } from 'react'
import Invite from '../UI-Compoents/Invite'
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
    <Invite/>
  )
}

export default invite