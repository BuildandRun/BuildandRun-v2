import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import './tweak-apps.css';
import './partners.css';
import './projects.css';
import './company.css';
import './payment/confirmation.css';
import './projects/debit-card.css';

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
