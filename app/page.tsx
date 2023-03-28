import Image from 'next/image'
import {Inter} from 'next/font/google'
import PokemonList from "@/app/components/PokemonList";

const inter = Inter({subsets: ['latin']})

export default async function Home() {
  const req = await fetch("http://localhost:3001/api/search");
  const data = await req.json();

  return (
    <main className={inter.className}>
      <PokemonList pokemons={data}/>
    </main>
  )
}
