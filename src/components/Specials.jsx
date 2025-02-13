import React from 'react';
import './Specials.css'
import SpecialsTab from './SpecialsTab';
import greekSaladImage from '../images/greek salad.jpg';
import bruchettaImage from '../images/bruchetta.svg';
import lemonDessertImage from '../images/lemon dessert.jpg';

export default function Specials() {
    return (
        <section className="specials-container">
            <div className="specials-head">
                <h1>
                    Specials
                </h1>
                <button className="specials-btn">
                    Online Menu
                </button>
            </div>
            <div className="specials-body">
                <SpecialsTab
                    image={greekSaladImage}
                    title="Greek Salad"
                    price="12.99"
                    description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. "
                />
                <SpecialsTab
                    image={bruchettaImage}
                    title="Bruchetta"
                    price="5.99"
                    description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. "
                />
                <SpecialsTab
                    image={lemonDessertImage}
                    title="Lemon Dessert"
                    price="5.00"
                    description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
                />
            </div>
        </section>
    );
}