import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import axios from "axios";

import Card from "./components/Card.js";
import Counter from "./components/Counter.js";
import { useEffect, useReducer } from "react";
import React, { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(3);

  // const fetchPokemonDetails = async (url) => {
  //   try{
  //     const response = await axios.get(url)
  //     return response.data;
  //   }catch(error){
  //     console.log(`Error fetching details for ${url}: `, error)
  //     return null;
  //   }
  // }

  document.title = "Pokemon- Gotta Catch Them All"

  const handleCountChange = (operation) => {
    setCount(prevCount => 
      operation === "increment" ? prevCount + 1 : prevCount - 1
    )
  }

  const getPokemonDetails = (url) => {
    return axios
      .get(url)
      .then((response) => response.data)
      .catch((error) => console.error(error));
  };

  const generateRandomNumber = (counterValue) => {
    let length = counterValue.count;
    let array = Array.from({ length }, () => Math.floor(Math.random() * 1025));
    return array;
  };

  const fetchPokemonData = async () => {
    console.log("tu sam");
    let randomNumbers = generateRandomNumber({count});
    let pokemonDetails = [];
    try {
      pokemonDetails = await Promise.all(
        randomNumbers.map((number) =>
          getPokemonDetails(`https://pokeapi.co/api/v2/pokemon/${number}`)
        )
      );

      setPokemons(pokemonDetails);
      console.log("tu sam", pokemonDetails);
    } catch (error) {
      console.error(error);
    }
  };

  /*  useEffect(() => {
    let isMounted =true;
    // axios.get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
    // .then(async (response) => {
    //   if(isMounted){
    //     const pokemonDetails = await Promise.all(
    //       response.data.results.map(async (pokemon) => {
    //         const details = await getPokemonDetails(pokemon.url)
    //         return {...pokemon, details}
    //       })
    //     )


    //     setPokemons(pokemonDetails);
    //     setIsLoading(false);
    //   }
    // })
    // .catch((error) => console.error(error))
    
    fetchPokemonData();
    return () => {
      isMounted = false;
    }
  }, []); */

  return (
    <div className="container">
      <Counter value={count} onCountChange={handleCountChange}/>
      <button className="generateBtn" onClick={() => fetchPokemonData()}>
        Generate Random
      </button>
      <div className="cardContr">
        {pokemons &&
          pokemons.map((pokemon) => (
            <Card
              key={pokemon.id}
              pokemon = {pokemon}
            />
          ))}
      </div>
    </div>
  );
}
