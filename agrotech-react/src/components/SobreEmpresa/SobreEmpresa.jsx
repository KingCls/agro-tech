import React from "react";
import "./SobreEmpresa.scss";
import cornfield from "../../assets/cornfield.png"; 

export default function SobreEmpresa({ sectionRef }) {
  return (
    <section ref={sectionRef} className="sobre-empresa-section">
      <div className="container">
        <div className="sobre-empresa">
          {/* Imagem */}
          <div className="sobre-img">
            <img src={cornfield} alt="Sobre a empresa" />
          </div>

          {/* Conteúdo */}
          <div className="sobre-content">
            <h2>Sobre a empresa</h2>

            {/* Subtítulo */}
            <div className="subtitulo">
              <span>Nossa missão</span>
              <hr />
            </div>

            {/* Missão */}
            <div className="text-box">
              <p>
                <strong>
                  Desenvolver soluções tecnológicas acessíveis que unam dados,
                  automação e inteligência artificial para apoiar agricultores
                  na tomada de decisões mais eficientes, promover uma produção
                  sustentável e contribuir com a erradicação da fome, alinhados
                  à ODS 2 da ONU.
                </strong>
              </p>
            </div>

            {/* Bullets */}
            <ul className="lista-missao">
              <li><strong>Tecnologia acessível ao campo</strong></li>
              <li><strong>Usar dados e IA para melhorar a produção agrícola</strong></li>
              <li><strong>Ajuda o produtor a tomar decisões mais inteligentes</strong></li>
              <li><strong>Incentivar uma agricultura mais sustentável</strong></li>
              <li><strong>Contribuir com o combate à fome (ODS 2)</strong></li>
            </ul>

            {/* Encerramento */}
            <hr className="separator" />
            <div className="text-box">
              <p>
                <strong>
                  Somos uma equipe pequena, mas dedicada e qualificada, que
                  acredita no poder da tecnologia para construir um mundo mais
                  justo, sustentável e eficiente.
                </strong>
              </p>
            </div>
            <hr className="separator" />
          </div>
        </div>
      </div>
    </section>
  );
}
