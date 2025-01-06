import classes from "./home-view.module.css";
import { Link } from "react-router";


export default function HomeView() {

    const title = "Welcome to the Pokémon VueDex!";
    const description = "I built this site while learning Vue.js—because coding with Pokémon is just better! Explore the Pokédex powered by the Pokémon API!";

    return(
        <main className="main-container"> 
            <div className={classes.hero_text_container}>
                <div>
                    <h1 className={classes.main_title}>
                        {title}
                    </h1>
                    <p className={classes.main_description}>
                        {description}
                    </p>
                </div>
                <Link className="primary-link" to="/pokedex">
                    Pokedex
                </Link>
            </div>
        </main>
    )
}