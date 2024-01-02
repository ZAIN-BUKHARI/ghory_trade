import React,{useContext,useState,useEffect} from 'react'
import { toast } from 'react-toastify';
import LightButtonPlayer from '../../universe.io/LightButtonPlayer'
import {ThemeContext} from '../../Context/ThemeContext'
import QRCode from 'qrcode.react';

const Invite = () => {
    const {Userid,mobile} = useContext(ThemeContext)
    const [inviteUrl, setInviteUrl] = useState('');
    const [showURL, setShowURL] = useState(false);

  useEffect(() => {
    const dynamicInviteUrl = `https://ug-trading.services/invite?_id=${Userid}`; // Replace with your invite URL
    setInviteUrl(dynamicInviteUrl);
  }, []);
    const Copy = () =>{
        navigator.clipboard.writeText(`https://ug-trading.services/invite?_id=${Userid}`)
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
    const showtext=()=>{
        setShowURL(true)
    }
    return (
    <>
    <section className='Invite-body'>
      <main className='Invite-main'>
        {/* <img className='Invite-img' src="qr-code.png" alt="QR code" width="288" height="288" /> */}
        <QRCode className='Invite-img' value={inviteUrl} alt="QR code" width="288" height="288" />
        <h1 className='Invite-h1' >Make your team</h1>
      </main>
        {!mobile && <LightButtonPlayer func={Copy} title={'Copy invite link'} disabled={false}/>}
        {showURL && mobile && <h1 className='invite-link-tag-mob'>{`https://www.ug-trading.services/invite?_id=${Userid}`}</h1> }
        {mobile && <LightButtonPlayer func={showtext} title={'Copy invite link'} disabled={false}/>}
    </section>
    </>
  )
}

export default Invite