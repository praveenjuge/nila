import Link from 'next/link';

const linkClass =
  'px-2 py-1.5 hover:bg-gray-200 rounded transition hover:text-black flex focus:outline-none focus:ring focus:ring-blue-700';

export default function Sidebar(props) {
  return (
    <aside className="hidden md:block text-sm font-medium text-gray-800">
      <div className="sticky top-4 space-y-0.5">
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
  );
}
