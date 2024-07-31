import React, { useContext, useState } from "react";
import { DataContext } from "../../context/DataContext";
import useFetch from "@/pages/hooks/useFetch.js";

export default function SinglePokemonDescription() {
  const pokemon = useContext(DataContext);
  const { data } = useFetch(pokemon.species.url);

  const text = data?.flavor_text_entries.find(
    (text) => text.language.name === "en"
  );

  return (
    <p>
      <span className="funFact">Fun fact:</span> 
      {text?.flavor_text
        .replace(/\f/g, " ")
        .split(".")
        .map((sentence) => sentence.trim())
        .filter((sentence) => sentence.length > 0)
        .map(
          (sentence) =>
            sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase()
        )
        .join(". ")}
    </p>
  );
}
