import style from "./RMTable.module.css";
import {getRickandMortyImage, characterDefaultImage} from "../../utility/utility";
import {NavLink} from "react-router-dom"
import React from "react";
function RMTable(props) {
    const {list}=props;
    const characterTr = list.results.map((character)=> {

        return (
                <tr className={style.characterImage} key={character.id}>
                    <td className={style.table} >
                            <img className={style.characterImage} onError={(event) => characterDefaultImage(event)}
                                 src={getRickandMortyImage(character.id)}
                                 alt={character.name}
                                 loading="lazy"/>
                    </td>
                    <td className={style.table}>
                        <h5>{character.name}</h5>
                    </td>
                    <td className={style.table}>
                        <h5>{character.species}</h5>
                    </td>
                    <td>
                        <NavLink to={`/Personaggi/${character.id}`}>
                            <button className={style.button}>Dettagli</button>
                        </NavLink>
                    </td>
                </tr>
        )
    });
    return (
        <table className={`table ${style.table}`}>
            <thead>
            <tr className={style.table}>
                <th>Image</th>
                <th>Name</th>
                <th>Species</th>
                <th></th>
            </tr>
            </thead>
            <tbody className="container">
            {characterTr}
            </tbody>
        </table>
    )
}

export default RMTable;