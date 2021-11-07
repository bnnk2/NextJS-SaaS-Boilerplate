import Head from 'next/head'
import Header from '../components/landing/Header'
import Hero from '../components/landing/Hero'

export default function Home() {
  return (
    <div>
      <Head>
        <title>NextJS SaaS Boilerplate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero/>
      
      </main>

    </div>
  )
}
