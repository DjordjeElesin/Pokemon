import { DataContext } from "@/pages/context/DataContext"
import { useContext } from "react"
import calculateHeightPercents from "@/pages/utils/calculateHeightPercents";

export default function PokemonStats(){
    const pokemon = useContext(DataContext);
    
    
    const HEIGHT_PERCENTS = calculateHeightPercents(pokemon.stats);

 return (
    <>
        <div className="pokemonStatsContr">
            {pokemon.stats && pokemon.stats.map((stat, index)=> {
                return (
                    <div className="pokemonSingleStatContr">
                        <span className="baseStatNumber">{stat.base_stat}</span>
                        <div className="statBarContr">
                            <span className="statBar" style={{height: `${HEIGHT_PERCENTS[index]}%`}}></span>
                        </div>
                        <span className="statTitle">{stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)}</span>
                    </div>
                )
            })}
        </div>
    
    </>
 )   
}