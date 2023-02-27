import React from "react";
import style from "./Footer.module.css";
import unimib from "../../../assets/images/unimib.jpg";
import {useParams} from "react-router-dom";

function Footer(props) {
    const {courseName, courseLink} = props;
    let {navItemsFooter} =useParams();
    return(
        <footer>

                <div className="container-fluid">

                    <div className="row">

                        <div className="col">
                            <nav className={style.footerNav}>

                                <ul className="nav flex-column">
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/Personaggi">Personaggi</a></li>
                                    <li><a href="/Episodi">Episodi</a></li>
                                    {navItemsFooter}
                                </ul>

                            </nav>
                        </div>

                        <div className="col-6">

                            <div className={`d-flex ${style.copyright}`}>

                                <div id={style.course}>
                                    <a href={courseLink} target="_blank">
                                        {courseName}
                                    </a>
                                </div>

                            </div>
                            <span id={style.span}>copyright by Riccardo Ferrante</span>
                        </div>

                        <div className="col-1">
                            <div id={style.unimib} className={style.logo}>
                                <a href="https://www.unimib.it/" target="_blank">
                                    <img src={unimib} alt="unimib"/>
                                </a>
                            </div>
                        </div>

                    </div>

                </div>

        </footer>
    )
}

export default Footer;