import Head from 'next/head';
import { MoonIcon } from '@heroicons/react/solid';
import 'tailwindcss/tailwind.css';
import Code from '../components/Code';
import Link from 'next/link';

const code = `// tailwind.config.js
module.exports = {
  purge: [
    // ...
    './node_modules/nila/src/*.tsx',
  ],
};`;

export default function Nila({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Nila | UI Elements for React with Tailwind CSS</title>
        <meta
          property="og:title"
          content="Nila | UI Elements for React with Tailwind CSS"
        />
        <meta
          name="twitter:title"
          content="Nila | UI Elements for React with Tailwind CSS"
        />
        <meta
          itemProp="name"
          content="Nila | UI Elements for React with Tailwind CSS"
        />
        <meta
          name="application-name"
          content="Nila | UI Elements for React with Tailwind CSS"
        />
        <meta property="og:site_name" content="Nila" />
        <meta
          name="description"
          content="UI Elements for React with Tailwind CSS"
        />
        <meta
          itemProp="description"
          content="UI Elements for React with Tailwind CSS"
        />
        <meta
          property="og:description"
          content="UI Elements for React with Tailwind CSS"
        />
        <meta
          name="twitter:description"
          content="UI Elements for React with Tailwind CSS"
        />
        <meta itemProp="image" content="/images/og.png" />
        <meta name="twitter:image:src" content="/images/og.png" />
        <meta property="og:image" content="/images/og.png" />
        <meta name="twitter:image" content="/images/og.png" />
        <meta property="article:author" content="Praveen Juge" />
        <meta property="og:article:author" content="Praveen Juge" />
        <meta name="author" content="Praveen Juge" />
        <meta property="og:locale" content="en" />
        <meta name="language" content="en" />
        <meta name="keywords" content="tailwind, tailwindcss, UI components" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="Nila" />
        <meta name="twitter:creator" content="@praveenjuge" />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta property="og:type" content="website" />

        {/* Inter Font */}
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>

      <div
        aria-hidden="true"
        className="w-full h-1.5 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
      ></div>

      <header className="bg-white shadow-sm">
        <div className="flex items-center justify-between px-4 py-2 mx-auto max-w-7xl">
          <Link href="/">
            <a className="text-gray-800 flex items-center space-x-0.5 text-2xl font-extrabold tracking-tight transition rounded  sm:leading-tight select-none focus:outline-none focus:ring focus:ring-blue-700">
              <MoonIcon className="w-6 h-6" />
              <span>Nila</span>
            </a>
          </Link>
          <a
            href="https://github.com/praveenjuge/nila"
            target="_blank"
            className="inline-flex items-center justify-center px-3 py-2 space-x-1 text-sm font-medium text-gray-900 transition bg-white border rounded select-none hover:bg-gray-100 hover:border-gray-300 focus:outline-none focus:ring-2 focus:border-blue-700 focus:ring-blue-700"
          >
            <svg
              className="flex flex-shrink-0 w-4 h-4 text-gray-800"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.026,2c-5.509,0-9.974,4.465-9.974,9.974c0,4.406,2.857,8.145,6.821,9.465 c0.499,0.09,0.679-0.217,0.679-0.481c0-0.237-0.008-0.865-0.011-1.696c-2.775,0.602-3.361-1.338-3.361-1.338 c-0.452-1.152-1.107-1.459-1.107-1.459c-0.905-0.619,0.069-0.605,0.069-0.605c1.002,0.07,1.527,1.028,1.527,1.028 c0.89,1.524,2.336,1.084,2.902,0.829c0.091-0.645,0.351-1.085,0.635-1.334c-2.214-0.251-4.542-1.107-4.542-4.93 c0-1.087,0.389-1.979,1.024-2.675c-0.101-0.253-0.446-1.268,0.099-2.64c0,0,0.837-0.269,2.742,1.021 c0.798-0.221,1.649-0.332,2.496-0.336c0.849,0.004,1.701,0.115,2.496,0.336c1.906-1.291,2.742-1.021,2.742-1.021 c0.545,1.372,0.203,2.387,0.099,2.64c0.64,0.696,1.024,1.587,1.024,2.675c0,3.833-2.33,4.675-4.552,4.922 c0.355,0.308,0.675,0.916,0.675,1.846c0,1.334-0.012,2.41-0.012,2.737c0,0.267,0.178,0.577,0.687,0.479 C19.146,20.115,22,16.379,22,11.974C22,6.465,17.535,2,12.026,2z"
              />
            </svg>
            <span>GitHub</span>
          </a>
        </div>
      </header>

      {/* <p className="text-base text-gray-500">
                For proper purge and jit support for tailwind, add this in your{' '}
                <code className="inline-flex items-center justify-center px-1 py-0.5 font-mono text-sm font-medium text-gray-700 bg-white border rounded">
                  tailwind.config.js
                </code>
              </p>
              <Code code={code} /> */}

      <Component {...pageProps} />
    </>
  );
}
