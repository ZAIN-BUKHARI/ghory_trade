import Script from 'next/script'
import React from 'react'

const testing = () => {
  return (
    <>
    <script>
    <Script src="https://apis.google.com/js/platform.js"></Script>
    </script>
    <div className='space'>
<div class="g-ytsubscribe space" data-channelid="UCHXv0CJEQCKJ4Ca9H-yPvxA" data-layout="default" data-count="default"></div>

    </div>

    <style>
        {`
        .space{
          position:absolute;
            margin-left:200px;
        }
        `}
    </style>
    </>
  )
}

export default testing