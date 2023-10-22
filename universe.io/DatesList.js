import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'

const Dropdown = () => {
    const {dates} = useContext(ThemeContext)

    return (
    <>
    <label class="popup">
  <input type="checkbox"/>
  <div class="burger" tabindex="0">
    <span></span>
    <span></span>
    <span></span>
  </div>
  <nav class="popup-window">
    <legend>Miss Dates</legend>
    <ul className='ul-dropdown'>
        {dates.length>0&& dates.map((member=>{
            return <li >
        <button>
          <svg stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle r="4" cy="7" cx="9"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
          <span>{member}</span>
        </button>
      </li>
}))}

     
    </ul>
  </nav>
</label>

    </>
  )
  
}

export default Dropdown