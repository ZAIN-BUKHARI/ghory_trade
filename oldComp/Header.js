import React from 'react'
import Head from 'next/head'
const Header = ({title}) => {
  return (
    <Head>
        <title>{title}</title>
        <meta name="description" content="Wear whatever you want? What do you want? you want clothes? so why not zwear.store clothes" />
        {/* <link rel="icon" sizes="57x57" href="/favicons.ico"/> */}

      </Head>
  )
}

export default Header