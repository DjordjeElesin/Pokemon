import React, { useState } from "react";

export default function Modal({ value, onModalChange, pokemonData }) {

  const pokemon = JSON.parse(pokemonData);
  value
    ? document.querySelector(".container").classList.add("activeModal")
    : document.querySelector(".container").classList.remove("activeModal");

  return (
    <>
      {value && (
        <div className="modal">
          <div className="overlay" onClick={onModalChange}></div>
          <div className="modal-content">
            <div className="modalImageContr">
             <img src={pokemon.sprites.front_default}/>
            </div>
            <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
            <p>
              Some random text
              
            </p>
            <button className="close-modal" onClick={onModalChange}>
              x
            </button>
          </div>
        </div>
      )}
    </>
  );
}
