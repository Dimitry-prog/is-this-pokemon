import {store} from "@/app/store/store";
import {setStartupPokemon} from "@/app/store/searchSlice";
import SearchInput from "@/app/components/SearchInput";
import Providers from "@/app/components/Provider";
import Preloader from "@/app/components/Preloader";

export default async function Home() {
  const req = await fetch("http://localhost:3001/api/search");
  const data = await req.json();
  store.dispatch(setStartupPokemon('', data));

  return (
    <main className="h-screen p-4 bg-gray-500">
      <Preloader pokemons={data}/>
      <Providers>
        <SearchInput/>
      </Providers>
    </main>
  )
}
