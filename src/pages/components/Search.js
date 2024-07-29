import React, { useState, useEffect, useCallback } from "react";
import useFetch from "../hooks/useFetch";
import axios from "axios";

export default function Search({ handlePokemonSelection }) {
  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [allPokemon, setAllPokemon] = useState([]);
  const [nextUrl, setNextUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=1025&offset=0"
  );
  const MAX_SUGGESTIONS = 15;

  const fetchData = useCallback(async () => {
    try {
      if (!nextUrl) return;
      const response = await fetch(nextUrl);
      if (!response.ok) {
        throw new Error("Could not fetch resources");
      }
      const data = await response.json();
      setAllPokemon((prev) => [
        ...new Set([...prev, ...data.results.map((pokemon) => pokemon.name)]),
      ]);
      setNextUrl(data.next);
    } catch (error) {
      console.error(error);
    }
  }, [nextUrl]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);
  };

  useEffect(() => {
    if (searchInput.length > 0) {
      const filteredSuggestions = allPokemon.filter((pokemon) =>
        pokemon.toUpperCase().includes(searchInput.toUpperCase())
      );
      setSuggestions(filteredSuggestions.slice(0, MAX_SUGGESTIONS));
    } else {
      setSuggestions([]);
    }
  }, [searchInput, allPokemon]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleSuggestionClick = (value) => {
    setSearchInput(value);
    setTimeout(() => setSuggestions([]), 0);
    //handlePokemonSelection(value);
  };

  const handleSearchClick= (value) => {
    setTimeout(() => setSuggestions([]), 0);
    handlePokemonSelection(value);
  }

  const handleEnterKeydown = (event) => {
    if (event.key === "Enter") {
      handleSearchClick(searchInput);
    } else {
      return;
    }
  };

  return (
    <div className="searchContr">
      <input
        value={searchInput}
        onChange={handleInputChange}
        autoComplete="off"
        type="text"
        id="pokemonSearch"
        placeholder="Enter Pokemon name or number"
        onKeyDown={handleEnterKeydown}
      />
      <button
        id="showPokemonBtn"
        onClick={() => handleSearchClick(searchInput)}
      >
        Search
      </button>
      {suggestions.length > 0 && (
        <ul id="pokemonList">
          {suggestions.map((suggestion, index) => (
            <li
              className="suggestion"
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
