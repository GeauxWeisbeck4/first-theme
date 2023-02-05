import Link from 'next/link'
import styles from '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      
      <Component {...pageProps} />
    </>
  )
   
}

export default MyApp
