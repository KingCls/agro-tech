import React, { useState } from 'react';
import './Header.scss'

function Header({ scrollToAbout, scrollToProject, scrollToQuiz, scrollToQuestions, scrollToSobreEmpresa,scrollToFaleConosco }) {
    const [menuAtivo, setMenuAtivo] = useState(false);

    const toggleMenu = () => {
        setMenuAtivo(!menuAtivo);
    };

    const handleScroll = (scrollFunction) => {
        scrollFunction();
        setMenuAtivo(false);
    };

    return (
        <>
         <header className={`header-navbar ${menuAtivo ? 'header-ativo' : ''}`}>
            <div className="logo_title">
                <h3>AgroTECH</h3>
            </div>

            <nav className={`navbar ${menuAtivo ? 'navbar-ativa' : ''}`}>
                <a onClick={scrollToProject}>Nosso Projeto</a>
                <a onClick={scrollToQuiz}>Quiz Tech</a>
                <a onClick={scrollToSobreEmpresa}>Sobre a Empresa</a>
                <a onClick={scrollToFaleConosco}>Fale Conosco</a>
                <a onClick={scrollToQuestions}>Perguntas</a>
            </nav>

            <button 
            className={`menu-hamburguer ${menuAtivo ? 'ativo' : ''}`}
            onClick={toggleMenu}
            aria-label='Abrir Menu'
            >
                <div className="barra"></div>
                <div className="barra"></div>
                <div className="barra"></div>
            </button>
        </header>
        </>
    );
}

export default Header;