import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import axios from "axios";

import Card from "./components/Card.js";
import { useEffect, useReducer } from "react";
import React, {useState} from 'react';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [pokemons, setPokemons] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // const fetchPokemonDetails = async (url) => {
  //   try{
  //     const response = await axios.get(url)
  //     return response.data;
  //   }catch(error){
  //     console.log(`Error fetching details for ${url}: `, error)
  //     return null;
  //   }
  // }

  const getPokemonDetails = (url) => {
    return axios.get(url)
    .then((response) => response.data)
    .catch((error => console.error(error)))
  } 

  useEffect(() => {
    let isMounted =true;
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
    .then(async (response) => {
      if(isMounted){
        const pokemonDetails = await Promise.all(
          response.data.results.map(async (pokemon) => {
            const details = await getPokemonDetails(pokemon.url)
            return {...pokemon, details}
          })
        )


        setPokemons(pokemonDetails);
        setIsLoading(false);
      }
    })
    .catch((error) => console.error(error))

    return () => {
      isMounted = false;
    }
  }, []);


  isLoading ? <div className="loading">Loading...</div> : console.log(pokemons);

  return (
    <div className="cardContr">
      {pokemons && pokemons.map((pokemon) => (
        <Card
          key={pokemon.name}
          name = {pokemon.name}
          image = {pokemon.details.sprites.front_default}
          abilities = {pokemon.details.abilities}
          type = {pokemon.details.types}
        />
      ))}
    </div>
  );
}
