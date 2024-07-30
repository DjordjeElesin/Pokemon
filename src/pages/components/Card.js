import React, { useState } from "react";
import { DataContext } from "../context/DataContext.js";
import Link from "next/link.js";

export default function Card({ pokemon }) {
  
  return (
    <>
      <div className="card" /* onClick={toggleModal} */>
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
                      let background;
                      switch (element.type.name) {
                        case "grass":
                          background = "#9bcc50";
                          break;
                        case "poison":
                          background = "#b97fc9";
                          break;
                        case "fire":
                          background = "#fd7d24";
                          break;
                        case "flying":
                          background =
                            "linear-gradient(180deg, #3dc7ef , #bdb9b8 )";
                          break;
                        case "water":
                          background = "#4592c4";
                          break;
                        case "bug":
                          background = "#729f3f";
                          break;
                        case "normal":
                          background = "#a4acaf";
                          break;
                        case "electric":
                          background = "#ffcb05";
                          break;
                        case "ground":
                          background =
                            "linear-gradient(180deg, #f7de3f , #ab9842 )";
                          break;
                        case "fairy":
                          background = "#fdb9e9";
                          break;
                        case "fighting":
                          background = "#d56723";
                          break;
                        case "psychic":
                          background = "#BF40BF";
                          break;
                        case "rock":
                          background = "##a38c21";
                          break;
                        case "steel":
                          background = "#9eb7b8";
                          break;
                        case "ice":
                          background = "#51c4e7";
                          break;
                        case "ghost":
                          background = "#7b62a3";
                          break;
                        case "dragon":
                          background =
                            "linear-gradient(180deg, #53a4cf , #f16e57 )";
                          break;
                        default:
                          background = "#707070";
                      }
                      return (
                        <span
                          style={{ background: background }}
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
