import RouteActiveLinks from "../buttons/route-active-links";
import classes from "./header.module.css";
import PokeBall from "../../assets/poke-ball.svg";
import { Link } from "react-router";

export default function Header() {

    const title = "Pokemon";

    return(
        <header className={classes.header}> 
            <div className={classes.header_container}>
                <Link
                    to="/"
                    className={classes.logo_container}
                >
                    <img 
                        className={classes.logo}
                        src={PokeBall}
                        alt="logo"
                    />
                </Link>
                <p className={classes.header_text}>
                    {title}
                </p>
                <div className={classes.header_cta_container}>
                    <RouteActiveLinks to="/pokedex">
                        Pokedex
                    </RouteActiveLinks>
                </div>
            </div>
        </header>
    )

}