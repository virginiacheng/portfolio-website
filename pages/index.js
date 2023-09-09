import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Virginia Cheng</title>
        <link rel="icon" href="/bao_icon.png" />
      </Head>
      <Header />

      <div className="flex mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
          <div className="flex-auto lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-3xl font-bold">
                Virginia Cheng
              </h1>
              <h3>
                Full-Stack Software Engineer II at EverTrue
              </h3>
            </div>
          </div>
          <div className="flex-auto pt-24 lg:w-1/2 lg:py-24">
            Some text about me
          </div>
      </div>

      {/* <Footer /> */}
    </div>
  )
}
