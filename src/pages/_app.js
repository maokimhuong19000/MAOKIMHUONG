// pages/_app.js
import Head from "next/head";
import '../styles/globals.css';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mao Kim Huong – Full-Stack Developer</title>
        <meta
          name="description"
          content="Passionate full-stack developer building modern web and mobile apps."
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/profile.jpeg" />
        <meta name="theme-color" content="#1abc9c" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <link rel="apple-touch-icon" href="/profile.jpeg" />
        <meta property="og:title" content="Mao Kim Huong Portfolio" />
        <meta
          property="og:description"
          content="Full-stack developer specializing in React, Next.js, Node.js, PHP, Flutter."
        />
        <meta property="og:image" content="/profile.jpeg" />
        <meta property="og:url" content="https://maokimhuong.vercel.app/" />
      </Head>
      <Component {...pageProps} />
    
    </>
  );
}

export default MyApp;
