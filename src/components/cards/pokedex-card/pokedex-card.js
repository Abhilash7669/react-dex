import { useEffect, useState } from "react";
import classes from "./pokedex-card.module.css";
import { Link } from "react-router";

const CARD_SCHEMA = {
    id: null,
    name: null,
    image: null,
    types: [],
    loading: false
}

export default function PokeDexCard({ item }) {

    const [cardData, setCardData] = useState(CARD_SCHEMA);

    let hasImage = cardData.image ?  ( <img className={classes.poke_dex_img} src={cardData.image}alt="" /> ) : (<div className={classes.poke_dex_img}> No image </div> )
    let image = 
    cardData.loading ? (
        <div 
            className={classes.poke_dex_img}>
            Image loading...
        </div> 
    ) :
    hasImage;

    let hasName = cardData.name ? (<span>{cardData.name}</span>) : (<span>No name</span>);
    let name = cardData.loading ? (<span>Loading name...</span>) : hasName;

    let hasTypes = cardData.types.length > 0 ? (<ul 
        className={classes.pokemon_types_container}
    >
        {cardData.types.map(item => (
            <li key={item} className={classes.pokemon_type}>
                {item.type.name}
            </li>
        ))}
    </ul>) : <p>No types</p>;
    
    let types = cardData.loading ? (<p>Loading types</p>) : hasTypes;

 


    useEffect(() => {

        async function FetchCardData() {

            setCardData(prevState => ({ ...prevState, loading: true }));

            const response = await fetch(item.url);


            if(response.ok) {

                const resData = await response.json();

                const id = `${resData.id}`;
                const name = resData.name;
                const image = resData.sprites.front_default;
                const types = resData.types;

                const num = "0000";            
                const finalId = num.substring(0, `${num.length - id.length}`) + id;
            

                if(resData) {
                    setCardData(() => {

                        return {
                            loading: false,
                            id: finalId,
                            name,
                            image,
                            types
                        }

                    });
                }

            } else {
                // handle error
            }

        }

        FetchCardData();

    }, [item]);

    return(
        <li className={classes.poke_dex_card}>
            <div className={classes.poke_dex_img_container}>
                {image}
            </div>
            <div className={classes.poke_dex_card_info_container}>
                <p className={classes.pokemon_id}>
                    <span>#{cardData.id}</span>
                </p>
                <p className={classes.pokemon_name}>
                    {name}
                </p>
               {types}
                <div>
                    <Link 
                        to={`/pokedex/${cardData.name}`}
                    >
                        Learn more
                    </Link>
                </div>
            </div>
        </li>
    )

}

