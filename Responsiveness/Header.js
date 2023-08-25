import React, { useContext,useState } from 'react'
import { FcMenu } from "react-icons/fc";
import { ThemeContext } from '../Context/ThemeContext';
import Link from 'next/link';
import { useRouter } from 'next/router';
const Header = () => {
    const router=useRouter()
    const {setAuth,setPaymentRequestModal}=useContext(ThemeContext)
    const [showMenu,setshowMenu]=useState(false)
    function hamburgerMenu(){
        if(showMenu)
            setshowMenu(false)
        else
            setshowMenu(true)
    }
    function LoginModaltoggle(){
        setshowMenu(false)
            setAuth(true)
            
    }
    function invite(){
        setshowMenu(false)
        router.push('/qrcode')
    }
    function withdraw(){
        setshowMenu(false)
        setPaymentRequestModal(true)
    }
    return (
    <>
    <style>
        {`
        .mobile-main{
            height:80px;
            display:flex;
            flex-direction:column;
            justify-content:space-between;

        }
        .div-one{
            justify-content:space-between;
        }
        .div-two{
            justify-content:center;
            
        }
        .list1{
            margin-right:15px
        }
        .list2{
            margin-right:15px
        }
        .list3{
            margin-right:15px
        }
        .list4{
            margin-right:15px
        }
        .list5{
            margin-right:15px
        }
        
        .mobile-list {
            font-size:12px;
            font-family:serif;
            font-weight:bold;
        }
        // h1{
        //     font-size:12px;
        //     font-family:serif;
        //     font-weight:bold;
        // }
        .mobile-img{
            height:50px;
            width:70px;
        }
        .hamburger{
            margin-right:10px;
            margin-top:10px;
            font-size:20px;
        }
        .header-hamburger-menu{
            background-color:rgb(0,0,0,0.8);
            height:100%;
            width:100%;
            position:absolute;
            z-index:10;


        }
        .list-hamburger{
            color:white;
            with:100%;
            height:100%;
            display:flex;
            flex-direction:column;
            justify-content:center;
            text-align:center;
            font-size:30px;
            font-family:serif;
        }
        .ham-l1{padding-bottom:35px;}
        .ham-l2{padding-bottom:35px;}
        .ham-l3{padding-bottom:35px;}
        .ham-l4{padding-bottom:35px;}
        .ham-l5{padding-bottom:35px;}
        `}
    </style>
    <div className='mobile-main'>
        <div className=' flex div-one'>
            {/* <h1>Ghory.trading</h1> */}
            <img className='mobile-img' src='remove_bg.png'/>
            <FcMenu className='hamburger' onClick={hamburgerMenu} />
        </div>
        <div className=''>
            <ul className='flex div-two'>
                <li className='list1 mobile-list'><Link href='/'>Home</Link></li>
                <li className='list2 mobile-list'><Link href='/about'>About</Link></li>
                <li className='list3 mobile-list'><Link href='/contact'>Contact</Link></li>
                <li className='list4 mobile-list'><Link href='/investment'>Invest</Link></li>
                <li className='list5 mobile-list'><Link href='/project'>Projects</Link></li>
            </ul>
        </div>
    </div>
    {showMenu && <div className='header-hamburger-menu'>
        <ul className='list-hamburger'>
            <li className='ham-l1' onClick={LoginModaltoggle}>Singup</li>
            <li className='ham-l2'><Link href='/work'>Dailywork</Link></li>
            <li className='ham-l4' onClick={invite}>Invite</li>
            <li className='ham-l5' onClick={withdraw}>Withdraw</li>
        </ul>

    </div>}
    </>
  )
}

export default Header