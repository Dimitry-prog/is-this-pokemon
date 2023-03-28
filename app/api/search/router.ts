import pokemon from '@/pokemon.json';
import {NextResponse} from "next/server";

export const GET = (req: Request) => {
  const {searchParams} = new URL(req.url);
  const name = searchParams.get("name");
  const pokemonData = pokemon.filter(pok => pok.name.toLowerCase().includes(name?.toLowerCase()) ?? "");

  return NextResponse.json(pokemonData.slice(0, 10));
}