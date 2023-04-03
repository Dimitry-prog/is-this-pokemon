import React from 'react';
import PokemonList from "@/app/components/PokemonList";
import {store} from "@/app/store/store";

const SSRPokemonList = () => {
  return (
    <PokemonList pokemons={store.getState().search.startupPokemon}/>
  );
};

export default SSRPokemonList;