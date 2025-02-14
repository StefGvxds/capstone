import React from 'react';
import Logo from '../images/Logo.svg';
import {Link} from "react-router-dom";
import './Footer.css';

export default function Footer() {
    return (
        <section className="fo-section">
                <div>
                    <img src={Logo} alt="Logo"/>
                </div>
                <div>
                    <h4>Doormat Navigation</h4>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/menu">Menu</Link>
                            </li>
                            <li>
                                <Link to="/reservations">Reservations</Link>
                            </li>
                            <li>
                                <Link to="/order-online">Order Online</Link>
                            </li>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <h4>Contact</h4>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/adress">Adress</Link>
                            </li>
                            <li>
                                <Link to="/phone">phone number</Link>
                            </li>
                            <li>
                                <Link to="/email">email</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
        </section>
    );
}