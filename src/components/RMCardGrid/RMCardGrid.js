import React, {useState} from "react";
import RMCard from "../RMCard/RMCard";
import {getRickandMortyImage} from "../../utility/utility";
function RMCardGrid(props) {
    const {list, col, origin,id } = props;


    let characterList;
    let episodeList;

    if(origin==="Home")
        characterList=list
    else
        characterList=list.results

    const characterCardsCol = characterList.map((character) => {
        return (
            <div key={character.id} className="col">
                <RMCard
                    name={character.name}
                    number={character.id}
                    image={getRickandMortyImage(character.id)}
                    species={character.species}
                    status={character.status}
                />
            </div>
        )
    });

    return (
        <div className={`row 
                row-cols-${col.xs}
                row-cols-sm-${col.sm}
                row-cols-md-${col.md}
                row-cols-lg-${col.lg}
                row-cols-xl-${col.xl}
        `}>
            {characterCardsCol}
        </div>
    )
}

export default RMCardGrid;