import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Primeira página com Next</title>
      </Head>
      <h1>Usando NextJS</h1>
      <h2>{process.env.NEXT_PUBLIC_API_URL}</h2>
      <Link href="/sobre">Sobre...</Link>

    </div>
  )
}
