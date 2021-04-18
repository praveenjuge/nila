import Head from 'next/head';
import { Button } from '../../dist';

export default function Home() {
  return (
    <>
      <Head>
        <title>Nila | UI Elements for React with Tailwind CSS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="p-16 space-y-4">
        <h1 className="font-bold text-3xl">Welcome to nila</h1>
        <Button>Hello World</Button>
      </div>
    </>
  );
}
