import Head from 'next/head';
import Link from 'next/link';

export default function ElementLayout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title} | UI Elements for React with Tailwind CSS | Nila</title>
      </Head>
      <main className="px-4 py-5 mx-auto max-w-7xl">
        <Link href="/">
          <a className="inline-flex items-center mb-1 text-sm font-medium text-gray-800 hover:text-blue-700">
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            Back
          </a>
        </Link>
        <h2 className="pb-10 text-3xl font-bold tracking-tight">{title}</h2>
        {children}
      </main>
    </>
  );
}
