import React from 'react';
import Logo from '../images/Logo.svg';
import { Link } from "react-router-dom";
import './Header.css';

export default function Header() {
    return (
        <section className={"header-section"}>
            <div>
                <img src={Logo} alt=""/>
            </div>
            <div>
                <nav>
                    <ul className={"header-menu"}>
                        <li className={"header-menu-item"}>
                            <h3>
                                <Link to="/">Home</Link>
                            </h3>
                        </li>
                        <li className={"header-menu-item"}>
                            <h3>
                                <Link to="/about">About</Link>
                            </h3>
                        </li>
                        <li className={"header-menu-item"}>
                            <h3>
                                <Link to="/menu">Menu</Link>
                            </h3>
                        </li>
                        <li className={"header-menu-item"}>
                            <h3>
                                <Link to="/reservations">Reservations</Link>
                            </h3>
                        </li>
                        <li className={"header-menu-item"}>
                            <h3>
                                <Link to="/order-online">Order Online</Link>
                            </h3>
                        </li>
                        <li className={"header-menu-item"}>
                            <h3>
                                <Link to="/login">Login</Link>
                            </h3>
                        </li>
                    </ul>
                </nav>
            </div>
            <div>
            </div>

        </section>
    );
}