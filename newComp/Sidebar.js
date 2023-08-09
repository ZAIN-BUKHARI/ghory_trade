import React from 'react'
import Dashboard from '../SVG/dashboard'
import Dollar from '../SVG/Dollar'
import Report from '../SVG/Report'
import Logout from '../SVG/Logout'
import Account from '../SVG/Account'
import Read from '../SVG/Read'
import { Settings } from 'react-feather'


const Sidebar = () => {
  return (
    <>
    <aside className="sidebar text-[10px]">
      <div className="logo">
        <img src="/go1.png" alt="logo"/>
        <h2 className='font-serif' >ghory.trading</h2>
      </div>
      <ul className="links">
        <h4 >Main Menu</h4>
        <li>
          <span className="material-symbols-outlined">
            <Dashboard/>
          </span>
        
          <a href="#">Dashboard</a>
        </li>
        <li>
          <span className="material-symbols-outlined">
            <Dollar/>
          </span>
          <a href="#">Revenue</a>
        </li>
        <li>
          <span className="material-symbols-outlined">
            <Report/>
          </span>
          <a href="#">Reports</a>
        </li>
        {/* <hr/> */}
        <hr/>
        <h4>Account</h4>
        <li>
          <span className="material-symbols-outlined">
            <Read/>
          </span>
          <a href="#">Overview</a>
        </li>
        <li>
          <span className="material-symbols-outlined">
            <Account/>
          </span>
          <a href="#">Account</a>
        </li>
        <li>
          <span className="material-symbols-outlined">
            <Settings/>
          </span>
          <a href="#">Settings</a>
        </li>
        <li className="logout-link">
          <span className="material-symbols-outlined">
            <Logout/>
          </span>
          <a href="#">Logout</a>
        </li>
      </ul>
    </aside>

    
    </>
  )
}

export default Sidebar