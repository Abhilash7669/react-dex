import { useLoaderData } from "react-router";
import { Suspense } from "react";
import classes from "./pokedex-view.module.css";
import PokeDexCard from "../../components/cards/pokedex-card/pokedex-card";
import PokeDexCardFallback from "../../components/cards/pokedex-card/pokedex-card-fallback";

export default function PokedexView() {

    const data = useLoaderData();

    const pokemonData = data.results;

    return(
        <main className="main-container">
            <div className={classes.poke_dex_wrapper}>
                <h1>
                    Welcome to the pokedex view
                </h1>
                {data && (
                    <ul 
                        className={classes.poke_dex_container}
                    >
                        {pokemonData.map(item => (
                            <Suspense key={item.name} fallback={<PokeDexCardFallback />}>
                                <PokeDexCard key={item.name} item={item} />
                            </Suspense>
                        ))}
                    </ul>
                )}
            </div>
        </main>
    );
}

export async function loader() {

    const url = process.env.REACT_APP_POKE_URL || "https://pokeapi.co/api/v2/pokemon/";

    const response = await fetch(url);

    if(!response.ok) {
        // handle error
        throw new Response(JSON.stringify({ message: 'Error fetching data' }), { status: 500 });
    } else {
        return response
    }

}
