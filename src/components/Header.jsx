import React from 'react';
import Logo from '../images/Logo.svg';
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <section>
            <div>
                <img src={Logo} alt=""/>
            </div>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Menu</Link>
                        </li>
                        <li>
                            <Link to="/">Reservations</Link>
                        </li>
                        <li>
                            <Link to="/about">Order Online</Link>
                        </li>
                        <li>
                            <Link to="/contact">Login</Link>
                        </li>
                    </ul>
                </nav>
            </div>

        </section>
    );
}