'use client'

import React, {ChangeEvent, useEffect} from 'react';
import {AppDispatch, RootState} from "@/app/store/store";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {setSearch} from "@/app/store/searchSlice";
import PokemonList from "@/app/components/PokemonList";
import {IPokemon} from "@/types";
import {pokemonApi} from "@/app/store/pokemonApi";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const SearchInput = () => {
  const search = useAppSelector(state => state.search.search);
  const startupPokemon = useAppSelector(state => state.search.startupPokemon);
  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch('', e.target.value))
  };

  const pokemonData = useAppSelector(
    (state) => state.pokemonApi.queries[`search("${search}")`]?.data as IPokemon[]
  );

  useEffect(() => {
    dispatch(pokemonApi.endpoints.search.initiate(search));
  }, [dispatch, search]);

  return (
    <div>
      <input
        value={search}
        onChange={handleChange}
        type="text"
      />
      <PokemonList pokemons={search.length ? pokemonData ?? [] : startupPokemon}/>
    </div>
  );
};

export default SearchInput;