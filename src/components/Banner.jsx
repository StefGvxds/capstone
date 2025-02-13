import React from 'react';
import './Banner.css';
import restaurantIMG from '../images/restaurant.jpg';

export default function Banner() {
    return (
        <section className="banner-container">
            <div className="banner-left-part">
                <h1 className="banner-left-part-title">
                  Little Lemon
                </h1>
                <h3 className="banner-left-part-continent">
                    Europe
                </h3>
                <p className="banner-left-part-description">
                    TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST
                </p>
                <button
                    className="banner-left-part-btn"
                >
                    Reserve a Table
                </button>
            </div>
            <div className="banner-right-part">
                <img src={restaurantIMG} alt="" />
            </div>
        </section>
    );
}