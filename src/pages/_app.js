import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mao Kim Huong – Full-Stack Developer</title>
        <meta name="description" content="Passionate full-stack developer building modern web and mobile apps." />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/profile.jpeg" />
        <meta name="theme-color" content="#1abc9c" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="apple-touch-icon" href="/profile.jpeg" />
        <meta property="og:title" content="Mao Kim Huong Portfolio" />
        <meta property="og:description" content="Full-stack developer specializing in React, Next.js, Node.js, PHP, Flutter." />
        <meta property="og:image" content="/profile.jpeg" />
        <meta property="og:url" content="https://yourdomain.com" />
         <meta name="theme-color" content="#1abc9c" />
  <link rel="manifest" href="/manifest.json" />
  <link rel="apple-touch-icon" href="/profile.jpeg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
