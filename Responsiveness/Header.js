import React,{useContext} from 'react'
import { FcMenu } from "react-icons/fc";
import Link from 'next/link';
import { ThemeContext } from '../Context/ThemeContext';
import { useRouter } from 'next/router';

const Header = () => {
    const router = useRouter()
    const {hideSidebar,sethideSidebar,token,subscription}=useContext(ThemeContext)
    
    function hamburgerMenu(){
        if(hideSidebar)
            sethideSidebar(false)
        else
            sethideSidebar(true)
    }
   if( router.asPath!='/chart' )
   {

    return (
    <>
    <style>
        {`
        .mobile-main{
            height:100px;
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            

        }
        .mobile-main-home{
            height:100px;
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            background-Color:black;

            

        }
        .div-one{
            justify-content:space-between;
        }
        .div-two{
            justify-content:center;
            
        }
        .list1{
            margin-right:20px
        }
        .list2{
            margin-right:20px
        }
        .list3{
            margin-right:20px
        }
        .list4{
            margin-right:20px
        }
        .list5{
            margin-right:15px
        }
        
        .mobile-list-main {
            font-size:15px;
            font-family:serif;
            font-weight:bold;
            color:white;
        }
        .mobile-list {
            font-size:15px;
            font-family:serif;
            font-weight:bold;
            color:black;
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
            font-size:30px;
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
    <div className={`${router.asPath=='/'?'mobile-main-home':'mobile-main'}`}>
        <div className=' flex div-one'>
            <img className='mobile-img' src='remove_bg.png'/>
           {router.asPath!='/history'&& router.asPath!='/work'&& <FcMenu className='hamburger' onClick={hamburgerMenu} />}
        </div>
        <div className=''>
           {subscription=='no' && <ul className='flex div-two'>
                <li className={`list1 ${router.asPath=='/'?'mobile-list-main':'mobile-list'}`}><Link href='/'>Home</Link></li>
                <li className={`list2 ${router.asPath=='/'?'mobile-list-main':'mobile-list'}`}><Link href='/about'>About</Link></li>
                <li className={`list3 ${router.asPath=='/'?'mobile-list-main':'mobile-list'}`}><Link href='/contact'>Contact</Link></li>
                <li className={`list-5 ${router.asPath=='/'?'mobile-list-main':'mobile-list'}`}><Link href='/project'>Projects</Link></li>
            </ul>}
           {token && subscription=='yes' && <ul className='flex div-two'>
                <li className={`list1 ${router.asPath=='/'?'mobile-list-main':'mobile-list'}`}><Link href='/'>Home</Link></li>
                <li className={`list3 ${router.asPath=='/'?'mobile-list-main':'mobile-list'}`}><Link href='/about'>About</Link></li>
                <li className={`list2 ${router.asPath=='/'?'mobile-list-main':'mobile-list'}`}><Link href='/stats'>Team</Link></li>
                <li className={`list5 ${router.asPath=='/'?'mobile-list-main':'mobile-list'}`}><Link href='/work'>Dailywork</Link></li>
            </ul>}
        </div>
    </div>
    </>
  )
}
}

export default Header