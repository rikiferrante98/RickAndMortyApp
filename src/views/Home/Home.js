import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import {NavLink} from "react-router-dom"
import RMCardGrid from "../../components/RMCardGrid/RMCardGrid";
import CharacterListData from "../../assets/data/CharacterListData.json";
import style from "./Home.module.css";
function Home() {
    const filteredList = CharacterListData.results.filter ((item) => item.id === 1 || item.id === 2 || item.id === 3);
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col">
                    <h1 className={style.h1}>RICK E MORTY</h1>
                    <h4>Scopri i dettagli dei personaggi di questa serie!</h4>
                    <div className="my-5 text-center">

                        <RMCardGrid
                            list={filteredList}
                            col={{xs: 1, sm: 1, md: 3, lg: 3, xl: 3}}
                            origin={"Home"}
                        />
                        <NavLink to="/Personaggi"><button className={style.button}>Let's go!</button></NavLink>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Home;