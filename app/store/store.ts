import {configureStore} from "@reduxjs/toolkit";
import searchSlice from "@/app/store/searchSlice";
import {pokemonApi} from "@/app/store/pokemonApi";

export const store = configureStore({
  reducer: {
    search: searchSlice,
    pokemonApi: pokemonApi.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(pokemonApi.middleware);
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;