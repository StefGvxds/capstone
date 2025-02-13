import React from 'react';
import './SpecialsTab.css'
import dishIcon from '../images/Dish icon.svg';

export default function SpecialsTab({image, title, price, description}) {
    return (
        <section className="specialsTab-container">
            <img src={image} alt="" className="specialsTab-image"/>
            <div className="specialsTab-body">
                <div className="specialsTab-title">
                    <h3>{title}</h3>
                    <h3 className="specialsTab-price">{price}</h3>
                </div>
                <p className="specialsTab-description">{description}</p>
            </div>
            <button className="specialsTab-button" >
                <h3>
                    Order a delivery
                </h3>
                <img
                    src={dishIcon}
                    alt="Dish Icon"
                    className="specialsTab-dishIcon"
                />
            </button>
        </section>
    );
}