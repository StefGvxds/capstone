import React from 'react';
import './AboveFooter.css';
import imageA from '../images/restaurant chef B.jpg';
import imageB from '../images/Mario and Adrian b.jpg';

export default function AboveFooter() {
    return (
        <section className="afooter-section">
            <div className="afooter-container">
                <h1 className="afooter-title">
                    Little Lemon
                </h1>
                <h3 className="afooter-continent">Europe</h3>
                <p>
                    TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TESTTEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TESTTEST TEST TEST TESTTEST TEST TEST TESTTEST TEST TEST TEST
                </p>
            </div>
            <div className="afooter-image-container">
                <img src={imageB} alt="Hintergrundbild" className="image-back"/>
                <img src={imageA} alt="Vordergrundbild" className="image-front"/>
            </div>

        </section>
    );
}