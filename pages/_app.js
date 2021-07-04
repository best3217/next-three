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
      <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="title" content="Engage your online presence while attracting new customers and lightening your workload." />
    <meta
      name="description"
      content="A company that helps businesses establish their online presence through Web-Applications, and Mobile applications, attract new customers through SEO and Marketing, and also lighten their workload by creating custom software."
    />
    <meta
      name="keywords"
      content="Websites,Apps,Applications,Software,Business,Small Business"
    />
    <meta name="robots" content="index, follow" />
    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="language" content="English" />
    </Head>
    </>
  )
}