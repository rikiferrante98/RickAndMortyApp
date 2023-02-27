import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import {NavLink} from "react-router-dom"
import RMCardGrid from "../../components/RMCardGrid/RMCardGrid";
import CharacterListData from "../../assets/data/CharacterListData.json";
function Home() {
    const filteredList = CharacterListData.results.filter ((item) => item.id === 1 || item.id === 2 || item.id === 3);
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col">

                    <div className="my-5 text-center">

                        <RMCardGrid
                            list={filteredList}
                            col={{xs: 1, sm: 1, md: 3, lg: 3, xl: 3}}
                            origin={"Home"}
                        />
                        <NavLink to="/Personaggi">Let's go</NavLink>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Home;