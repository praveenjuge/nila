import Head from 'next/head';
import Sidebar from './Sidebar';

export default function ElementLayout({ title, children, prose }) {
  return (
    <>
      <Head>
        <title>{title} | UI Elements for React with Tailwind CSS | Nila</title>
      </Head>
      <section className="grid gap-10 grid-cols-6 mx-auto max-w-7xl px-4 py-8">
        <Sidebar />
        <main className="col-span-full md:col-span-5">
          <div className="prose max-w-none">
            <h1 className="tracking-tight">{title}</h1>
          </div>
          <div className={'mt-8 ' + (prose && 'prose max-w-none')}>
            {children}
          </div>
        </main>
      </section>
    </>
  );
}
