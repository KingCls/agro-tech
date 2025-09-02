import React from 'react';
import './OurProject.scss';
import imagemProjeto from '../../assets/img-projeto.jpg';

function OurProject ({ sectionRef }) {
    return (
        <>
        <section ref={sectionRef} className='project'>
            <div className="title">
                <h2>Nosso Projeto</h2>
            </div>
            <div className="project-content">
                <div className="imagem_lateral">
                    <img src={imagemProjeto} />
                </div>
                <div className="caixas">
                    <div className="boxes">
                        <span className="material-symbols-outlined">drone_2</span>
                        <h4>Monitoramento inteligente</h4>
                        <p>
                            Monitore sua lavoura de forma inteligente utilizando sensores para coletar dados essenciais, além de imagens de satélite e drones para obter uma visão ampla e detalhada da sua produção.
                        </p>
                        <p className='frase'>Tenha total visibilidade sobre sua lavoura</p>
                    </div>
                    <div className="boxes">
                        <span className="material-symbols-outlined">network_intel_node</span>
                        <h4>Diagnóstico com IA</h4>
                        <p>
                            Conte com diagnósticos precisos por meio de Inteligência Artificial, analisando dados com agilidade para identificar padrões, prever problemas e otimizar seu trabalho.
                        </p>
                        <p className='frase'>Antecipe o problema antes que ele apareça</p>
                    </div>
                    <div className="boxes">
                        <span className="material-symbols-outlined">analytics</span>
                        <h4>Monitoramento inteligente</h4>
                        <p>
                            Monitore sua lavoura de forma inteligente utilizando sensores para coletar dados essenciais, além de imagens de satélite e drones para obter uma visão ampla e detalhada da sua produção.
                        </p>
                        <p className='frase'>Tenha total visibilidade sobre sua lavoura</p>
                    </div>
                    <div className="boxes">
                        <i className="fa-brands fa-whatsapp"></i>
                        <h4>Monitoramento inteligente</h4>
                        <p>
                            Monitore sua lavoura de forma inteligente utilizando sensores para coletar dados essenciais, além de imagens de satélite e drones para obter uma visão ampla e detalhada da sua produção.
                        </p>
                        <p className='frase'>Tenha total visibilidade sobre sua lavoura</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default OurProject;