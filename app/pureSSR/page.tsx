import {store} from "@/app/store/store";
import {setStartupPokemon} from "@/app/store/searchSlice";
import SSRPokemonList from "@/app/components/SSRPokemonList";

export default async function PureSSR() {
  const req = await fetch("http://localhost:3001/api/search");
  const data = await req.json();
  store.dispatch(setStartupPokemon(data, data));

  return (
    <main className="h-screen p-4 bg-gray-500">
      <SSRPokemonList/>
    </main>
  )
}
