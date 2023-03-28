import Image from 'next/image'
import {Inter} from 'next/font/google'

const inter = Inter({subsets: ['latin']})

export default async function Home() {
  const req = await fetch('http://localhost:3000/api/search');
  const data = await req.json();

  return (
    <main className={inter.className}>
      {JSON.stringify(data)}
    </main>
  )
}
