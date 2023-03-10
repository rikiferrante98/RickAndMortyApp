import React, {useEffect, useState} from "react";
import {
    getRickandMortyImage,
    characterDefaultImage,
    removeDashesAndUnderscores,
    zeroPad
} from "../../utility/utility";
import {NavLink, useParams} from "react-router-dom";
import style from "./PersonaggiDetail.module.css";


function PersonaggiDetail() {


    const [characterData, setCharacterData] = useState([0]);


    let {number} = useParams();
    let id = parseInt(number);


    useEffect(() => {

        let isMounted = true;

        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(res => res.json())
            .then(res => {

                if (isMounted)
                    setCharacterData(res);
            })
            .catch((error) => console.log("Error" + error));


        return () => {
            isMounted = false;
        }

    }, [id]);

    return (
        <div className="container">
            <div className="row">
                <div className="col">

                    <div className={style.navigation}>

                        {id - 1 !== 0 &&
                            <NavLink className={`${style.prev} ${style.navItem}`}
                                     to={`/Personaggi/${id - 1}`}>&lt; Prev</NavLink>
                        }

                        {id + 1 <= Object.keys(characterData).length &&
                            <NavLink className={`${style.next} ${style.navItem}`}
                                     to={`/Personaggi/${id + 1}`}>Next &gt;</NavLink>
                        }
                    </div>
                        <div>
                            <h1>{characterData.name}</h1>
                        </div>


                        <div className={style.info}>

                        <img className={style.image} onError={(event) => characterDefaultImage(event)}
                             src={getRickandMortyImage(characterData.id)}
                             alt={characterData.name}/>
                            <div className={style.box}>
                                <div>
                                    <h4 className={style.title}>Specie:{characterData.species}</h4>
                                </div>

                                <div>
                                    <h4 className={style.title}>Status:{characterData.status}</h4>
                                </div>

                                <div>
                                    <h4 className={style.title}> Tipo:{characterData.type}</h4>
                                </div>

                                <div>
                                    <h4 className={style.title}>Genere:{characterData.gender}</h4>
                                </div>
                            </div>

                        </div>
                </div>
            </div>
        </div>
    )
}

export default PersonaggiDetail;






