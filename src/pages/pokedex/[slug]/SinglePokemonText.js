import { IoIosPlayCircle } from "react-icons/io";
import { IoPauseCircle } from "react-icons/io5";

import { useContext, useRef, useState } from "react";
import useFetch from "@/pages/hooks/useFetch";
import { DataContext } from "../../context/DataContext";

export default function SinglePokemonText() {
  const pokemon = useContext(DataContext);
  const { data } = useFetch(pokemon.species.url);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const text = data?.flavor_text_entries.find(
    (text) => text.language.name === "en"
  );

  text ? console.log(text) : console.log("cekaj");

  const playSound = () => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
    console.log("ref", audioRef, pokemon.cries.latest);
  };

  const handleAudioEnd = () => {
    setIsPlaying(false);
  };

  return (
    <div className="pokemonTextContr">
      <div className="topTextContr">
        <h1>
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          <span className="id">#{pokemon.id.toString().padStart(4, "0")}</span>
        </h1>
        <div className="audioContr">
          <button id="playPokemonSound" onClick={playSound}>
            {isPlaying ? <IoPauseCircle /> : <IoIosPlayCircle />}
          </button>
          <audio
            ref={audioRef}
            id="pokemonSound"
            src={pokemon.cries.latest}
            onEnded={handleAudioEnd}
          />
        </div>
      </div>
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
    </div>
  );
}
