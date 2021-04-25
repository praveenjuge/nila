import Link from 'next/link';

const linkClass =
  'flex flex-col w-full overflow-hidden text-sm font-medium text-gray-800 transition border rounded cursor-pointer hover:border-gray-300 group';

export default function Home() {
  return (
    <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <Link href="/alert/">
        <a className={linkClass}>
          <span
            className="flex items-center justify-center transition select-none h-36"
            aria-hidden="true"
          >
            <span className="flex items-center w-full p-3.5 ml-6 space-x-2 bg-gray-100 group-hover:bg-gray-200 transition rounded-tl rounded-bl">
              <svg
                className="w-5 h-5 text-gray-400 transition group-hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Alert</span>
            </span>
          </span>
        </a>
      </Link>
      <Link href="/avatar/">
        <a className={linkClass}>
          <span
            className="flex items-center justify-center transition select-none h-36"
            aria-hidden="true"
          >
            <span className="flex items-center space-x-1">
              <svg
                className="w-12 h-12 text-gray-300 transition group-hover:text-gray-400"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12,2C6.579,2,2,6.579,2,12s4.579,10,10,10s10-4.579,10-10S17.421,2,12,2z M12,7c1.727,0,3,1.272,3,3s-1.273,3-3,3 c-1.726,0-3-1.272-3-3S10.274,7,12,7z M6.894,16.772c0.897-1.32,2.393-2.2,4.106-2.2h2c1.714,0,3.209,0.88,4.106,2.2 C15.828,18.14,14.015,19,12,19S8.172,18.14,6.894,16.772z" />
              </svg>
              <span className="text-gray-700 transition group-hover:text-gray-800">
                Avatar
              </span>
            </span>
          </span>
        </a>
      </Link>
      <Link href="/badge/">
        <a className={linkClass}>
          <span
            className="flex items-center justify-center transition select-none h-36"
            aria-hidden="true"
          >
            <span className="px-3.5 py-1 bg-gray-100 group-hover:bg-gray-200 group-hover:border-gray-200 transition border rounded-full">
              Badge
            </span>
          </span>
        </a>
      </Link>
      <a
        href="/button/"
        className="flex flex-col w-full overflow-hidden text-sm font-medium text-gray-800 transition border rounded opacity-25 cursor-pointer pointer-events-none hover:border-gray-300 group"
      >
        <span
          className="flex items-center justify-center transition select-none h-36"
          aria-hidden="true"
        >
          <span className="bg-gray-200 group-hover:bg-gray-300 transition px-4 py-2.5 rounded-md">
            Button
          </span>
        </span>
      </a>
      <a
        href="/checkbox/"
        className="flex flex-col w-full overflow-hidden text-sm font-medium text-gray-800 transition border rounded opacity-25 cursor-pointer pointer-events-none hover:border-gray-300 group"
      >
        <span
          className="flex items-center justify-center transition select-none h-36"
          aria-hidden="true"
        >
          <span className="flex items-center space-x-0.5">
            <svg
              className="w-8 h-8 text-gray-300 transition group-hover:text-gray-400"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7,5C5.897,5,5,5.897,5,7v10c0,1.103,0.897,2,2,2h10c1.103,0,2-0.897,2-2V7c0-1.103-0.897-2-2-2H7z M7,17V7h10l0.002,10H7z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.996 12.556L9.7 11.285 8.3 12.715 11.004 15.362 15.703 10.711 14.297 9.289z"
              />
            </svg>
            <span className="text-gray-700 transition group-hover:text-gray-800">
              Checkbox
            </span>
          </span>
        </span>
      </a>
      <a
        href="/input/"
        className="flex flex-col w-full overflow-hidden text-sm font-medium text-gray-800 transition border rounded opacity-25 cursor-pointer pointer-events-none hover:border-gray-300 group"
      >
        <span
          className="flex items-center justify-center transition select-none h-36"
          aria-hidden="true"
        >
          <span className="w-full ml-6">
            <span className="text-gray-700 transition group-hover:text-gray-800">
              Input Tag
            </span>
            <span className="flex items-center w-full p-5 mt-1.5 space-x-2 transition border-t border-b border-l rounded-tl rounded-bl shadow-sm group-hover:border-gray-300" />
          </span>
        </span>
      </a>
      <a
        href="/radio/"
        className="flex flex-col w-full overflow-hidden text-sm font-medium text-gray-800 transition border rounded opacity-25 cursor-pointer pointer-events-none hover:border-gray-300 group"
      >
        <span
          className="flex items-center justify-center transition select-none h-36"
          aria-hidden="true"
        >
          <span className="flex items-center space-x-0.5">
            <svg
              className="w-8 h-8 text-gray-300 transition group-hover:text-gray-400"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12,5c-3.859,0-7,3.141-7,7s3.141,7,7,7s7-3.141,7-7S15.859,5,12,5z M12,17c-2.757,0-5-2.243-5-5s2.243-5,5-5s5,2.243,5,5 S14.757,17,12,17z" />
              <path d="M12,9c-1.627,0-3,1.373-3,3s1.373,3,3,3s3-1.373,3-3S13.627,9,12,9z" />
            </svg>
            <span className="text-gray-700 transition group-hover:text-gray-800">
              Radio Button
            </span>
          </span>
        </span>
      </a>
      <a
        href="/select/"
        className="flex flex-col w-full overflow-hidden text-sm font-medium text-gray-800 transition border rounded opacity-25 cursor-pointer pointer-events-none hover:border-gray-300 group"
      >
        <span
          className="flex items-center justify-center transition select-none h-36"
          aria-hidden="true"
        >
          <span className="flex items-center justify-between w-full p-3 mx-4 space-x-2 transition border rounded shadow-sm group-hover:border-gray-300">
            <span className="ml-0.5">Select Tag</span>
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </span>
      </a>
      <Link href="/spinner/">
        <a className={linkClass}>
          <span
            className="flex items-center justify-center transition select-none h-36"
            aria-hidden="true"
          >
            <span className="flex items-center space-x-2">
              <svg
                className="w-6 h-6 text-gray-700 transition group-hover:text-gray-900"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx={12}
                  cy={12}
                  r={10}
                  stroke="currentColor"
                  strokeWidth={4}
                />
                <path
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              <span className="text-gray-700 transition group-hover:text-gray-800">
                Spinner...
              </span>
            </span>
          </span>
        </a>
      </Link>
    </section>
  );
}
