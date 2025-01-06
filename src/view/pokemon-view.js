import { useParams } from "react-router"


export default function PokemonView() {

    const params = useParams();

    return(
        <section className="main-container">
            {params.id}
        </section>
    )

}