import React,{useState} from 'react'
import { toast } from 'react-toastify';
import LightButtonPlayer from '../universe.io/LightButtonPlayer'

const Invite = () => {

    const Copy = () =>{
        var text=navigator.clipboard.writeText('http://www.youtube.com')
        toast.success('Link copied to yout clipboard  ', {
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
        {/* <p className='Invite-p'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p> */}
      </main>
        <LightButtonPlayer func={Copy} title={'Copy invite link'} disabled={false}/>
    </section>
    </>
  )
}

export default Invite