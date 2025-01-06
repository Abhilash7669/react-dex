import { createBrowserRouter } from "react-router";
import PokedexView, { loader as pokeDexDataLoader } from "../view/pokedex/pokedex-view";
import RootLayout from "../components/layout/root-layout";
import HomeView from "../view/home/home-view";
import Error from "../components/error";
import PokemonView from "../view/pokemon-view";


export const routes = createBrowserRouter([
    { 
        path: '/', 
        element: <RootLayout />,
        children: [
            { index: true, element: <HomeView /> },
            { 
                path: '/pokedex', 
                element: <PokedexView />,
                errorElement: <Error />,
                loader:  pokeDexDataLoader
            },
            {
                path: '/pokedex/:id',
                element: <PokemonView />
            }
        ] 
    }
]);