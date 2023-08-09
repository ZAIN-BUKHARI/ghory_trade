import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className='overflow-x-hidden'>
      <Head />
      <link rel="icon" sizes="57x57" href="/Favicon/favicon.ico"/>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}