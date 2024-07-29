import React, { useState, useContext } from "react";
import { FaXmark } from "react-icons/fa6";
import { DataContext } from "../../context/DataContext";
import {Palette, usePalette} from "color-thief-react";

import PokemonDescription from "./PokemonDescription";
import PokemonDetails from "./PokemonDetails";
import ModalHeading from "./ModalHeading";

export default function Modal({ isModalActive, onModalChange }) {
  const pokemon = useContext(DataContext);
  

  //const pokemon = JSON.parse(pokemonData);
  isModalActive
    ? document.querySelector(".container").classList.add("activeModal")
    : document.querySelector(".container").classList.remove("activeModal");

  const {data, error} = usePalette(pokemon?.sprites?.other['official-artwork']?.front_default, 3, 'hex', {
    crossOrigin: 'anonymous',
    quality: 10,
  })

  return (
    <>
      {isModalActive && (
        <div className="modal">
          <div className="overlay" onClick={onModalChange}></div>
          <div className="modalContr">
            <div className="modalContentContr">
              <div className="modalImageContr">
              <img src={pokemon.sprites.other['official-artwork'].front_default} />
              </div>
              {data && (<ModalHeading/>)}
              {data && (<PokemonDescription colorData= {data}/>)}
              {data && (<PokemonDetails colorData= {data}/>)}
              <button className="close-modal" onClick={onModalChange}>
                <FaXmark />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
