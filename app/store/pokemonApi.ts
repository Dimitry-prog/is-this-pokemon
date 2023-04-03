import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";
import {IPokemon} from "@/types";

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3001/api/"}),
  tagTypes: ["pokemon"],
  endpoints: (builder) => ({
    search: builder.query<IPokemon[], string>({
      query: (q) => `search?name=${q}`,
      providesTags: (result, error, search) => [{type: "pokemon", search}],
    }),
  }),
});