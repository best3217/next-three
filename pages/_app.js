// import '../app.css'
import 'react-toastify/dist/ReactToastify.min.css';
import '../styles/App.scss'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
    <Component {...pageProps} />
    <Head>
      <title>next-three</title>
    </Head>
    </>
  )
}