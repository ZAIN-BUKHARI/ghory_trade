import axios from 'axios'
import React,{useContext,useEffect,useState} from 'react'
import { ThemeContext } from '../Context/ThemeContext'
import { useRouter } from 'next/router'
import { FcCancel } from "react-icons/fc";
const Searchbar = (e) => {
  const router = useRouter()
  const {setusersearchresults,setplanssearchresults} = useContext(ThemeContext)
  const [val,setval]=useState('')
  const [url,seturl]=useState('')

  useEffect(()=>{
    if(router.asPath=='/adminusers')
          seturl('search')
    else
      seturl('searchplans')
    
  })
    const Search =async()=>{
      try{
        let res = await axios.get(`/api/post/${url}?name=${val}`)
        if(res.data.error!=false)
        {
          if(router.asPath=='/adminusers')
            setusersearchresults(res.data.event)
          else
            setplanssearchresults(res.data.event)
        }
        else{
          alert('No results found')
          
        }
      }catch(e){
        alert('Server error')
      }
    }
    const ClearListResults = () =>{
      setval('')
      setusersearchresults([])
    }
  return (
    <>
    <style>{`
    .reset-search-results{
      color:red;
      // border: 1px solid grey
      
    }
    .fc-cancel{
      font-size:30px;

    }
    `}</style>
    <div className="input__container">
  <div className="shadow__input"></div>
  <button className="input__button__shadow" onClick={Search}>
    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" height="20px" width="20px">
      <path d="M4 9a5 5 0 1110 0A5 5 0 014 9zm5-7a7 7 0 104.2 12.6.999.999 0 00.093.107l3 3a1 1 0 001.414-1.414l-3-3a.999.999 0 00-.107-.093A7 7 0 009 2z" fill-rule="evenodd" fill="#17202A"></path>
    </svg>
  </button>
  <input type="text" onChange={(e)=>{setval(e.target.value)}} value={val} name="text" className="input__search" placeholder="What do you want to search?"/>
      <button className='reset-search-results' onClick={ClearListResults}><FcCancel className='fc-cancel'/> </button>
</div>
    </>
  )
}

export default Searchbar