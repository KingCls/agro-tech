import React from 'react';
import './HeroSection.scss';

function HeroSection() {
    return(
        <>
        <section className="hero_section">
            <div className="container_hero">
                <div className="text_hero">
                    <h1>AGRICULTURA</h1>
                    <h1>SUSTENTÁVEL</h1>
                </div>
                <button className='btn_saiba'>Saiba Mais</button>
            </div>
        </section>
        </>
    );
}

export default HeroSection;