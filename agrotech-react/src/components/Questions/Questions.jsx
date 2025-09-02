import React, { useState } from 'react';
import './Questions.scss';

function Questions ({ sectionRef }) {
    // Controle da perginta aberta
    const [openIndex, setOpenIndex] = useState(null);

    // Clique
    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqData = [
        { q: 'Como funciona o monitoramento por IA da lavoura?', a: 'Nosso sistema utiliza sensores IoT instalados na propriedade que coletam dados sobre umidade do solo, temperatura, pH e outros parâmetros essenciais. Esses dados são processados por algoritmos de inteligência artificial que analisam padrões, identificam anomalias e geram recomendações personalizadas para otimizar sua produção.'},
        { q: 'Quanto custa para implementar o sistema na minha fazenda?', a: 'O investimento varia conforme o tamanho da propriedade e as necessidades específicas. Oferecemos planos flexíveis a partir de R$ 299/mês para pequenos produtores. Para propriedades maiores, fazemos um orçamento personalizado. O retorno do investimento normalmente acontece em 6-12 meses através da otimização da produção.'},
        { q: 'O sistema funciona em qualquer tipo de cultura?', a: ' Sim! Nossa tecnologia é adaptável para diversas culturas como soja, milho, café, cana-de-açúcar, frutas, hortaliças e pastagens. Os algoritmos são treinados com dados específicos de cada tipo de plantação, garantindo recomendações precisas para sua cultura.'},
        { q: 'Preciso de internet para usar o sistema?', a: 'Para o funcionamento completo, é necessária conexão com internet, mas desenvolvemos soluções para áreas rurais com sinal limitado. Os sensores podem armazenar dados localmente e sincronizar quando há conexão disponível. Também oferecemos parcerias para instalação de internet via satélite.'},
        { q: 'Como recebo os relatórios e alertas ?', a: 'Você recebe todas as informações através do WhatsApp, e-mail ou pelo nosso aplicativo móvel. Os alertas críticos são enviados em tempo real, enquanto relatórios detalhados são gerados semanalmente. Você pode personalizar quando e como quer receber cada tipo de informação.'},
        { q: 'Quanto tempo leva para ver os resultados?', a: 'Os primeiros insights aparecem já na primeira semana após a instalação. Melhorias significativas na produtividade são observadas geralmente no primeiro ciclo de cultivo (2-4 meses). O sistema fica mais preciso com o tempo, aprendendo as características específicas da sua propriedade.'}
    ];

    return (
        <>
        <section ref={sectionRef} className='questoes'>
            <div className="faq">
                <div className="titulo">
                    <h2>Perguntas Frequentes</h2>
                    <p>Tire suas dúvidas sobre nossa tecnologia agrícola</p>
                </div>
                <div className="caixinhas_perguntas">
                    {faqData.map((item, index) => (
                        <div 
                            className="faq-item"
                            key={index}
                        >
                        <div 
                            className={`faq-question-header ${openIndex === index ? 'ativo' : ''}`}
                            onClick={() => handleToggle(index)}
                        >
                        <p className="faq-question-text">{item.q}</p>
                            <span className="material-symbols-outlined faq-icon">
                                {openIndex === index ? 'close' : 'add'}
                            </span>
                        </div>
                        {openIndex === index && (
                            <div className="faq-answer">
                                <p>{item.a}</p>
                            </div>
                        )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
        </>
    );
}

export default Questions;