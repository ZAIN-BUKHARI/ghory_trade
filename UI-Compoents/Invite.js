import React,{useContext} from 'react'
import { toast } from 'react-toastify';
import LightButtonPlayer from '../universe.io/LightButtonPlayer'
import {ThemeContext} from '../Context/ThemeContext'

const Invite = () => {
    const {Userid} = useContext(ThemeContext)
    const Copy = () =>{
        navigator.clipboard.writeText(`http://www.ghory.trade/invite?_id=${Userid}`)
        toast.success('Link copied to your clipboard  ', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
    } 
    return (
    <>
    <section className='Invite-body'>
      <main className='Invite-main'>
        <img className='Invite-img' src="qr-code.png" alt="QR code" width="288" height="288" />
        <h1 className='Invite-h1'>Make your team</h1>
      </main>
        <LightButtonPlayer func={Copy} title={'Copy invite link'} disabled={false}/>
    </section>
    </>
  )
}

export default Invite