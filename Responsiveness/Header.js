import React from 'react'
import { FcMenu } from "react-icons/fc";
const Header = () => {
  return (
    <>
    <style>
        {`
        // .mobile-main{
        //     height:80px;
        //     display:flex;
        //     flex-direction:column;
        //     justify-content:space-between;

        // }
        // .div-one{
        //     justify-content:space-between;
        // }
        // .div-two{
        //     justify-content:center;
            
        // }
        // .list1{
        //     margin-right:15px
        // }
        // .list2{
        //     margin-right:15px
        // }
        // .list3{
        //     margin-right:15px
        // }
        // .list4{
        //     margin-right:15px
        // }
        // .list5{
        //     margin-right:15px
        // }
        
        // li{
        //     font-size:12px;
        //     font-family:serif;
        //     font-weight:bold;
        // }
        // h1{
        //     font-size:12px;
        //     font-family:serif;
        //     font-weight:bold;
        // }
        // img{
        //     height:50px;
        //     width:70px;
        // }
        // .hamburger{
        //     margin-right:10px;
        //     margin-top:10px;
        //     font-size:20px;
        // }
        `}
    </style>
    <div className='mobile-main'>
        <div className=' flex div-one'>
            {/* <h1>Ghory.trading</h1> */}
            <img src='remove_bg.png'/>
            <FcMenu className='hamburger'/>
        </div>
        <div className=''>
            <ul className='flex div-two'>
                <li className='list1'>Home</li>
                <li className='list2'>About</li>
                <li className='list3'>Project</li>
                <li className='list4'>Contact</li>
                <li className='list5'>invest</li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Header