import Head from "next/head";
import { Nav } from "./nav";

export const Header = (props) => {
  return (
    <div className="mx-auto sticky top-0 z-10">
      <Head>
        <title>Cena law - Your partner in immigration services</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width, viewport-fit=cover' />
        <link
          rel="preload"
          href="/fonts/GTSuperDisplay/GT-Super-Display-Bold.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/GTSuperDisplay/GT-Super-Display-Light.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/BasierCircle/BasierCircle-Bold.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/BasierCircle/BasierCircle-Medium.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/BasierCircle/BasierCircle-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/BasierCircle/BasierCircle-SemiBold.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <Nav />
    </div>
  );
};
