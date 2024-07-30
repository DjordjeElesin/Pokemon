import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

export default function SinglePokemonDetails({ colorData }) {
  const pokemon = useContext(DataContext);

  const height = pokemon.height * 10;
  const weight = (pokemon.weight / 10).toFixed(2);

  return (
    <div className="pokemonDetails">
      <p className="detail">
        Height <span style={{ color: `${colorData[0]}` }}>{height} cm</span>
      </p>
      <p className="detail">
        Weight <span style={{ color: `${colorData[0]}` }}>{weight} kg</span>
      </p>
      <p className="detail">
        Abilities
        <div className="abilitiesContr">
          {pokemon.abilities.map((element) => (
            <span className="ability">{element.ability.name.charAt(0).toUpperCase() + element.ability.name.slice(1)}</span>

          ))}
        </div>
      </p>
    </div>
  );
}
