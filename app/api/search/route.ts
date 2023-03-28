import {NextResponse} from "next/server";
import pokemon from '@/pokemon.json';

export const GET = async (req: Request) => {
  const {searchParams} = new URL(req.url);
  const name = searchParams.get("name");
  const pokemonData = pokemon.filter(pok =>
    pok.name.toLowerCase().includes(name?.toLowerCase() ?? "")
  );

  return NextResponse.json(pokemonData.slice(0, 10));
}