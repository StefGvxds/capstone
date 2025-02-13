import React from "react";
import './TestGuy.css';

export default function TestGuys({personIMG, personName, comment}) {
    return (
        <section className="testGuy-section">
            <h1 className="testGuy-title">Rating</h1>
            <div className="testGuy-person">
                <img src={personIMG} alt="Person" className="testGuy-img"/>
                <h2>{personName}</h2>
            </div>
            <h2>{comment}</h2>
        </section>
    )
}