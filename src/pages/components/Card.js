import React, { useState } from "react";
import Modal from "./Modal.js";

export default function Card({ pokemon }) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className="card" onClick={toggleModal}>
        <div className="prfPicContr">
          <img src={pokemon.sprites.front_default} alt="pokemon image" />
        </div>
        <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
        {
          <table>
            <tbody>
              <tr>
                <td>Type</td>
                <td className="types">
                  {pokemon.types.map((element) => (
                    <span key={element.type.name}>{element.type.name}</span>
                  ))}
                </td>
              </tr>
              <tr>
                <td>Abilities</td>
                <td className="abilities">
                  {pokemon.abilities.slice(0, 2).map((element) => {
                    return (
                      <span key={element.ability.name}>
                        {element.ability.name}
                      </span>
                    );
                  })}
                </td>
              </tr>
            </tbody>
          </table>
        }
      </div>

      <Modal value={modal} onModalChange={toggleModal} pokemonData = {JSON.stringify(pokemon)}/>
    </>
  );
}
