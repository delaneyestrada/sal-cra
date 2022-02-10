import * as React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import useSiteMetadata from './SiteMetadata';
import { withPrefix } from 'gatsby';

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/dylan-landscape.jpg`}
        />
        <link rel="stylesheet" href="https://use.typekit.net/dwy0vuj.css" />

        <body className="text-sm md:text-base lg:text-lg w-full h-full bg-slate-100" />
      </Helmet>
      <div className="p-2 md:p-8 max-w-7xl flex flex-col justify-center mx-auto">
        <Navbar></Navbar>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default TemplateWrapper;
