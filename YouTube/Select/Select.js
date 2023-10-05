import React,{useState} from 'react'
import styles from './select.module.css'
import { useRouter } from 'next/router'
const Select = ({setselect}) => {
  const [options,setoptions]=useState('')
  const router = useRouter()
  return (
    <div className={styles.hero}>
        <select className={styles.selectField} onChange={(e)=>{setoptions(e.target.value)}} name="" id="">
          <option className={styles.list} onChange={(e)=>{setoptions('')}}>Select Panel</option>
          <option className={styles.list} value={"UG"}>U-G Panel</option>
          <option className={styles.list} value={"YOUTUBE"}>Youtube Panel</option>
        </select>
       {options=="YOUTUBE" && <img src='youtube.png' onClick={()=>{setselect(false);router.push('/')}}  className={styles.icon} />}
       {options=="UG" && <img src='ghory_withback.jpeg' onClick={()=>{setselect(false);router.push('/admin')}} className={styles.icons} />}
    </div>
  )
}

export default Select