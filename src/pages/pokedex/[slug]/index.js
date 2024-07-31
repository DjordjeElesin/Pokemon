import { useRouter } from "next/router";
import { DataContext } from "@/pages/context/DataContext";
import { Palette, usePalette } from "color-thief-react";

import SinglePokemonText from "./SinglePokemonText";
import SinglePokemonDetails from "./SinglePokemonDetails";
import Link from "next/link";
import Head from "next/head";
import PokemonStats from "./PokemonStats";

export default function SinglePokemonPage({ repo }) {
  const router = useRouter();

  const { data, error } = usePalette(
    repo?.sprites?.other["official-artwork"]?.front_default,
    3,
    "hex",
    {
      crossOrigin: "anonymous",
      quality: 10,
    }
  );

  return (
    <>
      <Head>
        <title>
          Pokedex - {repo.name.charAt(0).toUpperCase() + repo.name.slice(1)}
        </title>
      </Head>
      <div className="singlePokemonContr">
        <div className="singlePokemonContentContr">
          <DataContext.Provider value={repo}>
            {data && (
              <div className="singlePokemonImageContr">
                <img
                  src={repo.sprites.other["official-artwork"].front_default}
                />
              </div>
            )}
            <div className="singlePokemonDetailsContr">
              {data && <SinglePokemonText />}
              {data && <SinglePokemonDetails colorData={data} />}
              <PokemonStats/>
            </div>
          </DataContext.Provider>
        </div>
        {data && (
          <button id="returnToPokedexBtn">
            <Link href="/pokedex">Browse More Pokemon</Link>
          </button>
        )}
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  console.log(context.query);
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${context.query.slug}`
  );
  const repo = await res.json();
  return { props: { repo } };
}
