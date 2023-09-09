import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Virginia Cheng</title>
        <link rel="icon" href="/bao_icon.png" />
      </Head>
      <Header />

      <main>
        <h1 className="name">
          Virginia Cheng
        </h1>
        <h3>
          Full-Stack Software Engineer II at EverTrue
        </h3>
      </main>

      <Footer />
    </div>
  )
}
