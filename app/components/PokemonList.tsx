import React, {FC} from 'react';
import {IPokemon} from "@/types";

interface PokemonListProps {
  pokemons: IPokemon[];
}

const PokemonList: FC<PokemonListProps> = ({pokemons}) => {
  return (
    <ul>
      {pokemons.map(pokemon => (
        <li key={pokemon.id}>
          {pokemon.name}
        </li>
      ))}
    </ul>
  );
};

export default PokemonList;