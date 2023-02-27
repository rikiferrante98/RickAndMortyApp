import React from "react";
import MainTemplate from "../../components/MainTemplate/MainTemplate";
import Home from "../Home/Home";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Personaggi from "../Personaggi/Personaggi";
import PersonaggiDetail from "../PersonaggiDetail/PersonaggiDetail";
import Logo from "../../assets/images/logo.png";
import Episodi from "../Episodi/Episodi";
function App() {

    const nav = [
        {url: "/", text: "Home", exact: true},
        {url: "/Personaggi", text: "Personaggi", exact: false},
        {url: "/Episodi", text:"Episodi", exact: true},
    ];

    return (

        <BrowserRouter>

            <MainTemplate
                footerCourseName="Applicazioni Web: Progettazione e Sviluppo"
                footerCourseLink="https://elearning.unimib.it/course/view.php?id=44672"
                navItems={nav}
                logo={Logo}
            >

                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/Personaggi" element={<Personaggi />}/>
                    <Route path="/Personaggi/:number" element={<PersonaggiDetail/>}/>
                    <Route path="/Episodi" element={<Episodi />}/>
                </Routes>

            </MainTemplate>

        </BrowserRouter>
    );
}

export default App;