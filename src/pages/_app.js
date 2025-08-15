import '@/styles/globals.css';
import { Montserrat } from 'next/font/google';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/styles/highlight-github-dark-plus.css';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import ContactMe from '@/components/ContactMe';


const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
});

export default function App({ Component, pageProps }) {
  const router = useRouter ();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${montserrat.variable} font-mont w-full min-h-screen`}>
        <Navbar />
        <AnimatePresence mode="wait">
        <Component key={router.asPath} {...pageProps} />
        <ContactMe /> 
        </AnimatePresence>
        <Footer />
      </main>
    </>
  );
}
