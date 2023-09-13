// pages/invite.js

import { useContext, useEffect, useState } from 'react';
import QRCode from 'qrcode.react';
import { ThemeContext } from '../Context/ThemeContext';
const Invite = () => {
    const {Userid,mobile} = useContext(ThemeContext)
  const [inviteUrl, setInviteUrl] = useState('');

  useEffect(() => {
    const dynamicInviteUrl = `https://ghory.trade/invite?_id=${Userid}`; // Replace with your invite URL
    setInviteUrl(dynamicInviteUrl);
  }, []);

  return (
    <div>
      <h1>Invite Page</h1>
      <p>Scan the QR code to accept the invite:</p>
      <QRCode value={inviteUrl} />
    </div>
  );
};

export default Invite;
