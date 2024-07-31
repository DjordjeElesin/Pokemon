import { DataContext } from "@/pages/context/DataContext"
import { useContext } from "react"
import calculateHeightPercents from "@/pages/utils/calculateHeightPercents";

export default function PokemonStats(){
    const pokemon = useContext(DataContext);
    
   /*  const MAX_HP = calculateMaxStat(pokemon.stats[0].base_stat, true);
    const MAX_ATTACK = calculateMaxStat(pokemon.stats[1].base_stat);
    const MAX_DEFENSE = calculateMaxStat(pokemon.stats[2].base_stat);
    const MAX_SPECIAL_ATTACK = calculateMaxStat(pokemon.stats[3].base_stat);
    const MAX_SPECIAL_DEFENSE = calculateMaxStat(pokemon.stats[4].base_stat);
    const MAX_SPEED = calculateMaxStat(pokemon.stats[5].base_stat); */

    const HEIGHT_PERCENTS = calculateHeightPercents(pokemon.stats);

    /* const calculateHeightOfStat = (maxStats, ) => {
        const heightPercents = [];
        maxStats.forEach((maxStat) => {
            heightPercents.push(Math.floor())
        })
    } */

 return (
    <>
        HI!
    
    </>
 )   
}