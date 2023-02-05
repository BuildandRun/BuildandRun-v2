import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* FAVICON  */}
        <link rel="shortcut icon" href="/img/favicon/favicon.ico" />
         {/* TITLE  */}
        <title>Build and Run 🎈</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}


export default CustomApp;
