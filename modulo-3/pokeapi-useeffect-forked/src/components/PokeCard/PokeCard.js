import React, { useEffect, useState } from "react";
import axios from "axios";

export default function PokeCard(props) {
  const [pokeInfo, setPokeInfo] = useState({});

  useEffect(() => {
    pegaPokemon(props.pokemon);
  }, [pokeInfo]);

  const pegaPokemon = (pokeName) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then((response) => {
        console.log(response.data.results);
        setPokeInfo(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const pokemon = pokeInfo;

  return (
    <div>
      <p>{pokemon.name}</p>
      <p>{pokemon.weight} Kg</p>
      {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
      {pokemon.sprites && (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      )}
    </div>
  );
}
