import React from 'react';
import TestGuy from './TestGuy';
import './Testimonials.css';
import p1 from '../images/person1.jpg';
import p2 from '../images/person2.jpg';
import p3 from '../images/person3.jpg';
import p4 from '../images/person4.jpg';

export default function Testimonials() {
    return (
        <section className="testim-section">
            <h3 className="testim-title">Testimonials</h3>
            <div className="testim-guys">
                <TestGuy personIMG={p1} personName="Alice T." comment="Very Good!"></TestGuy>
                <TestGuy personIMG={p2} personName="Shahin G." comment="Tasty :)"></TestGuy>
                <TestGuy personIMG={p3} personName="Billy M." comment="Nice ... "></TestGuy>
                <TestGuy personIMG={p4} personName="Mira E." comment="Pie Pie Pie =)"></TestGuy>
            </div>
        </section>
    );
}