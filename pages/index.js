import Head from 'next/head';
import Nav from '@components/Nav';
import HomeContent from '@components/HomeContent';

export default function Home() {
  return (
    <div className="bg-slate-300 text-slate-600 text-lg">
      <Head>
        <title>Virginia Cheng</title>
        <link rel="icon" href="/bao_icon.png" />
      </Head>

      <div className="block lg:flex font-sans mx-auto min-h-screen max-w-screen-xl px-10 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="flex-auto lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-48">
          <Nav />
        </div>
        <div className="flex-auto pt-12 lg:w-1/2 lg:pt-48 pb-6">
          <HomeContent />
        </div>
      </div>
    </div>
  );
}
