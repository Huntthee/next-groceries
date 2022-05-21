import Head from 'next/head'
import Main from './components/main'

export default function Home() {
  return (
    <div>
      <Head>
        <title>The Grocery List</title>
        <meta name="description" content="Built by Mike Allison with Create Next App" />
        <link rel="icon" href="" />
      </Head>

      <Main></Main>
    </div>
  )
}
