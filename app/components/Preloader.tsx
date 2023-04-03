'use client'

import React, {useRef} from 'react';
import {IPokemon} from "@/types";
import {store} from "@/app/store/store";
import {setStartupPokemon} from "@/app/store/searchSlice";

const Preloader = ({pokemons}: { pokemons: IPokemon[] }) => {
  const loaded = useRef<boolean>(false);

  if (!loaded.current) {
    store.dispatch(setStartupPokemon('', pokemons));
    loaded.current = true;
  }

  return null;
};

export default Preloader;