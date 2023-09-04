import React from 'react'
import Worksheet from '../UI-Compoents/Worksheet'
import { useEffect,useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'

const work = () => {
  const {fetchDailyWork} = useContext(ThemeContext)
  useEffect(()=>{
    fetchDailyWork()
  },[])
  return (
    <Worksheet/>
  )
}

export default work