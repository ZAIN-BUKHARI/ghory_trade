import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className='overflow-x-hidden'>
      <Head />
      <link rel="icon" sizes="57x57" href="fav.ico"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"></link>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}