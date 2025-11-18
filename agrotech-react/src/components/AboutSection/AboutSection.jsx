import React from 'react';
import './AboutSection.scss';

function AboutSection () {
    return (
        <>
        <section className='descricao_hero'>
            <div className="descricao">
                <div className="caixas_hero">
                    <div className="caixas">
                        <span className="material-symbols-outlined">grass</span>
                        <h4>Nosso Projeto</h4>
                        <p>
                            Este projeto usa tecnologia de ponta para monitorar lavouras com precisão, combinando sensores, IA e dados acessíveis. A proposta contribui com a ODS 2, promovendo uma produção agrícola mais eficiente, sustentável e voltada ao combate à fome.
                        </p>

                        <div className="project_link">
                            <p>Segue o link do vídeo do projeto</p>
                            <a href='https://youtu.be/JwBGSLyXx9g'>Clique aqui</a>
                        </div>
                    </div>
                    <div className="caixas">
                        <span className="material-symbols-outlined">domain</span>
                        <h4>Sobre a empresa</h4>
                        <p>
                            Somos um grupo de estudantes comprometidos com a inovação no campo. Este projeto foi desenvolvido como parte de um trabalho acadêmico com foco em soluções tecnológicas para a agricultura sustentável, alinhadas à ODS 2 da ONU. Acreditamos que, com tecnologia e propósito, é possível gerar impacto real.
                        </p>
                    </div>
                    <div className="caixas">
                        <span className="material-symbols-outlined">mail</span>
                        <h4>Fale conosco</h4>
                        <p>
                           Quer saber como nossa tecnologia pode transformar sua lavoura e contribuir para uma agricultura mais eficiente e sustentável? Fale com a gente e descubra como fazer parte dessa mudança rumo ao combate à fome.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <hr />
        </>
    );
}

export default AboutSection;