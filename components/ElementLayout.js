import Head from 'next/head';
import Link from 'next/link';

const linkClass =
  'px-2 py-1.5 hover:bg-gray-200 rounded transition hover:text-black flex focus-visible:outline-none focus-visible:ring focus-visible:ring-blue-700';

export default function ElementLayout({ title, children, prose }) {
  return (
    <>
      <Head>
        <title>{title} | UI Elements for React with Tailwind CSS | Nila</title>
      </Head>
      <section className="grid gap-10 grid-cols-6 mx-auto max-w-7xl px-4 pt-8 pb-16">
        <aside className="hidden md:block text-sm font-medium text-gray-800">
          <div className="sticky top-20 space-y-0.5">
            <Link href="/installation/">
              <a className={linkClass}>Installation</a>
            </Link>
            <Link href="/alert/">
              <a className={linkClass}>Alert</a>
            </Link>
            <Link href="/avatar/">
              <a className={linkClass}>Avatar</a>
            </Link>
            <Link href="/badge/">
              <a className={linkClass}>Badge</a>
            </Link>
            <Link href="/button/">
              <a className={linkClass}>Button</a>
            </Link>
            <Link href="/checkbox/">
              <a className={linkClass}>Checkbox</a>
            </Link>
            <Link href="/input/">
              <a className={linkClass}>Input Tag</a>
            </Link>
            <Link href="/radio/">
              <a className={linkClass}>Radio Button</a>
            </Link>
            <Link href="/select/">
              <a className={linkClass}>Select Tag</a>
            </Link>
            <Link href="/spinner/">
              <a className={linkClass}>Spinner</a>
            </Link>
          </div>
        </aside>
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
