import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";

const PageLayout = ({ children, title, description, image, className }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />

        <meta name="description" content={description} key="description" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} key="og:title" />
        <meta
          property="og:description"
          content={description}
          key="og:description"
        />
        <meta property="og:image" content={image} key="og:image" />
        <meta
          property="og:url"
          content={`https://wdjx.com${router?.asPath}`}
          key="og:url"
        />
        <meta name="twitter:card" content={description} key="twitter:card" />

        <meta
          property="og:site_name"
          content="WDJX - Warri Design Junction Experience"
          key="og:site_name"
        />

        <meta
          property="twitter:url"
          content={`https://justdeal.ng${router?.asPath}`}
          key="twitter:url"
        />
        <meta
          name="twitter:image:alt"
          content="WDJX - Warri Design Junction Experience"
          key="twitter:image:alt"
        />
        <meta property="twitter:domain" content="wdjx.com" />

        <title>{title}</title>
        <meta name="apple-mobile-web-app-title" content="Justdeal" />
        <meta name="application-name" content="Justdeal" />
        <meta name="msapplication-TileColor" content="#ffbbff" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/wdjx.png" />
      </Head>
      <div>
        <main className="overflow-hidden min-h-screen">
          {children}
        </main>
      </div>
    </>
  );
};

export default PageLayout;
