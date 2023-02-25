import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import './tweak-apps.css';
import './projects.css';

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
