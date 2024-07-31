import React, { useState } from "react";
import { DataContext } from "../context/DataContext.js";
import Link from "next/link.js";
import getPokemonType from "../utils/getPokemonType.js";

export default function Card({ pokemon }) {
  
  return (
    <>
      <div className="card">
        <div className="pokemonImgContr">
          <Link href={`/pokedex/${pokemon.name}`}>
            <img
              src={pokemon.sprites.other["official-artwork"].front_default}
              alt="pokemon image"
            />
          </Link>
        </div>
        <div className="cardContentContr">
          <span className="pokemonId">#{pokemon.id.toString().padStart(4, '0')}</span>
          <Link className="pokemonNameLink" href={`/pokedex/${pokemon.name}`}>
            <h2>
              {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </h2>
          </Link>
          {
            <table>
              <tbody>
                <tr>
                  <td>Type</td>
                  <td className="types">
                    {pokemon.types.map((element) => {
                      
                      return (
                        <span
                          style={{ background: getPokemonType(element.type.name) }}
                          key={element.type.name}
                        >
                          {element.type.name.charAt(0).toUpperCase() + element.type.name.slice(1)}
                        </span>
                      );
                    })}
                  </td>
                </tr>
              </tbody>
            </table>
          }
        </div>
      </div>
      
      {/* <DataContext.Provider value= {pokemon}>
        <Modal
          isModalActive={isModalActive}
          onModalChange={toggleModal}
        />
      </DataContext.Provider> */}
    </>
  );
}
