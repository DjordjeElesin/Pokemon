import React, { useState, useEffect } from "react";
import axios from "axios";
import generateRandomNumbers from "./utils/Utilities.js";

//components
import Card from "./components/Card.js";
import Navbar from "./components/Navbar.js";
import Search from "./components/Search.js";
import Filter from "./components/Filter.js";

export default function Home() {
  const [pokemonNumbers, setPokemonNumbers] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
  ]);
  const [randomNumbers, setRandomNumbers] = useState([]);
  const [isRandomized, setIsRandomized] = useState(false);
  const [pokemonData, setPokemonData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const resetToInitialState = () => {
    setPokemonNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    setRandomNumbers([]);
    setIsRandomized(false);
    setPokemonData([]);
    setSelectedPokemon(null);
  };

  useEffect(() => {
    const fetchPokemonData = async () => {
      setIsLoading(true);
      try {
        const numbersArray = isRandomized ? randomNumbers : pokemonNumbers;
        console.log("numbersArray: ", numbersArray, isRandomized);
        const newPokemonData = await Promise.all(
          numbersArray.map(async (number) => {
            const response = await axios.get(
              `https://pokeapi.co/api/v2/pokemon/${number}`
            );
            return response.data;
          })
        );
        setPokemonData((prevData) =>
          [
            ...new Set([...prevData, ...newPokemonData].map(JSON.stringify)),
          ].map(JSON.parse)
        );
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPokemonData();
  }, [pokemonNumbers, randomNumbers, isRandomized]);

  const loadMore = () => {
    if (isRandomized) {
      setRandomNumbers(generateRandomNumbers(12));
    } else {
      setPokemonNumbers((prevNumbers) =>
        prevNumbers.map((number) => number + 12)
      );
      console.log("Numbers", pokemonNumbers);
    }
  };

  const handlePokemonSelection = async (name) => {
    if (name === "") {
      resetToInitialState();
      console.log("ordered: ", pokemonNumbers, isRandomized);
    } else {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${name.replace(/^0+/, '')}`
        );
        setSelectedPokemon(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleRandomizeClick = () => {
    let array = generateRandomNumbers(12);
    setRandomNumbers(array);
    setIsRandomized(true);
    setPokemonData([]);
    console.log("random: ", array);
  };

  return (
    <>
      <Navbar />
      <Search handlePokemonSelection={handlePokemonSelection} />
      <Filter
        handleRandomizeClick={handleRandomizeClick}
        isLoading={isLoading}
      />
      <DataContext.Provider value={pokemonData}>
        <div className="container">
          <div className="cardContr">
            {selectedPokemon ? (
              <Card key={selectedPokemon.id} pokemon={selectedPokemon} />
            ) : (
              pokemonData.map((pokemon) => (
                <Card key={pokemon.id} pokemon={pokemon} />
              ))
            )}
          </div>
        </div>
        {!selectedPokemon && (
          <div className="loadBtnContr">
            <button className="loadBtn" onClick={loadMore} disabled={isLoading}>
              {isLoading ? "Loading..." : "Load More"}
            </button>
          </div>
        )}
      </DataContext.Provider>
    </>
  );
}
