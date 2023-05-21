import React, { useState } from "react";

const fakePokemonList = {
  count: 1281,
  next: "https://pokeapi.co/api/v2/pokemon?offset=9&limit=9",
  previous: null,
  results: [
    {
      name: "bulbasaur",
      url: "https://pokeapi.co/api/v2/pokemon/1/",
    },
    {
      name: "ivysaur",
      url: "https://pokeapi.co/api/v2/pokemon/2/",
    },
    {
      name: "venusaur",
      url: "https://pokeapi.co/api/v2/pokemon/3/",
    },
    {
      name: "charmander",
      url: "https://pokeapi.co/api/v2/pokemon/4/",
    },
    {
      name: "charmeleon",
      url: "https://pokeapi.co/api/v2/pokemon/5/",
    },
    {
      name: "charizard",
      url: "https://pokeapi.co/api/v2/pokemon/6/",
    },
    {
      name: "squirtle",
      url: "https://pokeapi.co/api/v2/pokemon/7/",
    },
    {
      name: "wartortle",
      url: "https://pokeapi.co/api/v2/pokemon/8/",
    },
    {
      name: "blastoise",
      url: "https://pokeapi.co/api/v2/pokemon/9/",
    },
  ],
};

const fakePokemonDetailData = {
  id: 1,
  name: "bulbasaur",
  height: 7,
  weight: 70,
  sprites: {
    front_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  types: [
    {
      slot: 1,
      type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12" },
    },
  ],
};

function PokemonList({ onPokemonSelected }) {
  const data = fakePokemonList;

  return (
    <article>
      <h2>Overview</h2>
      <ol start={1}>
        {data.results.map((pokemon) => (
          <li key={pokemon.name}>
            <button onClick={() => onPokemonSelected(pokemon.name)}>
              {pokemon.name}
            </button>
          </li>
        ))}
      </ol>
    </article>
  );
}

function PokemonDetails({ pokemonName }) {
  const data = fakePokemonDetailData;
  return (
    <article>
      <h2>{data.name}</h2>
      <img src={data.sprites.front_default} alt={data.name} />
      <ul>
        <li>id: {data.id}</li>
        <li>height: {data.height}</li>
        <li>weight: {data.weight}</li>
        <li>types:</li>
      </ul>
    </article>
  );
}

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(undefined);

  return (
    <>
      <header>
        <h1>My Pokedex</h1>
      </header>
      {selectedPokemon ? (
        <>
          <PokemonDetails pokemonName={selectedPokemon} />
          <button onClick={() => setSelectedPokemon(undefined)}>Back</button>
        </>
      ) : (
        <PokemonList onPokemonSelected={setSelectedPokemon} />
      )}
    </>
  );
}

export default App;
