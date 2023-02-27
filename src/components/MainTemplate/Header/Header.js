import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import logo from "../../../assets/images/logo.png";
import style from "./Header.module.css";
function Header(args) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar className={style.navBar}>
                <NavbarBrand href="/"><img src={logo} alt={"logo"}/></NavbarBrand>
                    <Nav className="me-auto">
                        <NavItem className={style.navItem}>
                            <NavLink href="/Personaggi">Personaggi</NavLink>
                        </NavItem>
                        <NavItem className={style.navItem}>
                            <NavLink href="/Episodi">
                                Episodi
                            </NavLink>
                        </NavItem>
                    </Nav>
            </Navbar>
        </div>
    );
}

export default Header;