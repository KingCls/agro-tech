import React, { useState, useEffect } from 'react';
import './BackToTop.scss';

function BackToTop () {

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
       
        if (window.scrollY > 300) {
            setIsVisible(true); 
        } else {
            setIsVisible(false); 
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []); 



    return (
        <>
        <div className="botao_top">
            <button 
            className={`back-to-top-button ${isVisible ? 'visible' : ''}`}
            onClick={scrollToTop}
            title="Voltar ao topo">
                <span className="material-symbols-outlined">arrow_upward</span>
            </button>
        </div>
        </>
    );
}

export default BackToTop;