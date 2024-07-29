import { IoIosPlayCircle } from "react-icons/io";
import { IoPauseCircle } from "react-icons/io5";

import { useContext, useRef, useState } from "react";
import { DataContext } from "../../context/DataContext";


export default function ModalHeading() {
  const pokemon = useContext(DataContext);
  const [isPlaying ,setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const playSound = () =>{
    isPlaying ? audioRef.current.pause() : audioRef.current.play()
    setIsPlaying(!isPlaying);
    console.log("ref", audioRef, pokemon.cries.latest);
  }

  const handleAudioEnd = () =>{
    setIsPlaying(false);
  }

  return (
    <div className="headingContr">
      <div>
        <h2>
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          <span className="id">#{pokemon.id.toString().padStart(4, "0")}</span>
        </h2>
      </div>
      <button id="playPokemonSound" onClick={playSound}>
        {isPlaying ? <IoPauseCircle /> : <IoIosPlayCircle />}
      </button>
      <audio ref={audioRef} id="pokemonSound" src={pokemon.cries.latest} onEnded={handleAudioEnd} />
    </div>
  );
}
