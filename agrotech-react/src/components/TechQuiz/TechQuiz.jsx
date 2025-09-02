import React, { useState } from 'react';
import './TechQuiz.scss';

function TechQuiz({ sectionRef }) {
    const [isQuizOpen, setIsQuizOpen] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({});
    const [showResult, setShowResult] = useState(false);
    const [result, setResult] = useState(null);

    const questions = [
        {
            id: 1,
            question: "Qual o tamanho da sua propriedade rural?",
            options: [
                { value: "pequena", text: "Pequena (até 10 hectares)", points: { basic: 3, advanced: 1, precision: 1 } },
                { value: "media", text: "Média (10-100 hectares)", points: { basic: 2, advanced: 3, precision: 2 } },
                { value: "grande", text: "Grande (mais de 100 hectares)", points: { basic: 1, advanced: 2, precision: 3 } }
            ]
        },
        {
            id: 2,
            question: "Qual o principal problema que você enfrenta?",
            options: [
                { value: "desperdicio", text: "Desperdício de água e recursos", points: { basic: 1, advanced: 2, precision: 3 } },
                { value: "produtividade", text: "Baixa produtividade", points: { basic: 2, advanced: 3, precision: 2 } },
                { value: "custos", text: "Altos custos operacionais", points: { basic: 3, advanced: 2, precision: 1 } },
                { value: "pragas", text: "Controle de pragas e doenças", points: { basic: 1, advanced: 3, precision: 2 } }
            ]
        },
        {
            id: 3,
            question: "Qual seu nível de conhecimento em tecnologia?",
            options: [
                { value: "basico", text: "Básico - prefiro soluções simples", points: { basic: 3, advanced: 1, precision: 1 } },
                { value: "intermediario", text: "Intermediário - gosto de aprender", points: { basic: 2, advanced: 3, precision: 2 } },
                { value: "avancado", text: "Avançado - quero o que há de mais moderno", points: { basic: 1, advanced: 2, precision: 3 } }
            ]
        },
        {
            id: 4,
            question: "Qual seu principal objetivo?",
            options: [
                { value: "sustentabilidade", text: "Agricultura mais sustentável", points: { basic: 2, advanced: 2, precision: 3 } },
                { value: "lucro", text: "Aumentar a rentabilidade", points: { basic: 1, advanced: 3, precision: 2 } },
                { value: "qualidade", text: "Melhorar a qualidade dos produtos", points: { basic: 2, advanced: 2, precision: 3 } },
                { value: "tempo", text: "Economizar tempo e trabalho", points: { basic: 3, advanced: 2, precision: 1 } }
            ]
        },
        {
            id: 5,
            question: "Qual seu orçamento para investir em tecnologia?",
            options: [
                { value: "baixo", text: "Baixo (até R$ 10.000)", points: { basic: 3, advanced: 1, precision: 1 } },
                { value: "medio", text: "Médio (R$ 10.000 - R$ 50.000)", points: { basic: 2, advanced: 3, precision: 2 } },
                { value: "alto", text: "Alto (mais de R$ 50.000)", points: { basic: 1, advanced: 2, precision: 3 } }
            ]
        }
    ];

    const technologies = {
        basic: {
            name: "Agricultura Básica Inteligente",
            description: "Soluções simples e eficazes para otimizar sua produção",
            features: [
                "📱 App móvel para monitoramento básico",
                "🌡️ Sensores de temperatura e umidade",
                "💧 Sistema de irrigação automatizado",
                "📊 Relatórios simples de produtividade"
            ],
            investment: "R$ 5.000 - R$ 15.000",
            roi: "Retorno em 8-12 meses"
        },
        advanced: {
            name: "Agricultura de Precisão",
            description: "Tecnologia avançada para máxima eficiência",
            features: [
                "🛰️ Monitoramento por satélite",
                "🤖 Inteligência Artificial para análises",
                "🚁 Drones para mapeamento aéreo",
                "📈 Dashboard completo com analytics"
            ],
            investment: "R$ 15.000 - R$ 40.000",
            roi: "Retorno em 12-18 meses"
        },
        precision: {
            name: "Agricultura Ultra Precisa",
            description: "O que há de mais moderno em tecnologia agrícola",
            features: [
                "🔬 Sensores IoT de alta precisão",
                "🧠 Machine Learning para predições",
                "🌐 Sistema integrado completo",
                "⚡ Automação total da propriedade"
            ],
            investment: "R$ 40.000 - R$ 100.000+",
            roi: "Retorno em 18-24 meses"
        }
    };

    const openQuiz = () => {
        setIsQuizOpen(true);
        setCurrentQuestion(0);
        setAnswers({});
        setShowResult(false);
        setResult(null);
    };

    const closeQuiz = () => {
        setIsQuizOpen(false);
    };

    const handleAnswer = (questionId, option) => {
        const newAnswers = { ...answers, [questionId]: option };
        setAnswers(newAnswers);

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            calculateResult(newAnswers);
        }
    };

    const calculateResult = (allAnswers) => {
        const scores = { basic: 0, advanced: 0, precision: 0 };

        Object.values(allAnswers).forEach(answer => {
            scores.basic += answer.points.basic;
            scores.advanced += answer.points.advanced;
            scores.precision += answer.points.precision;
        });

        const maxScore = Math.max(scores.basic, scores.advanced, scores.precision);
        let recommendedTech;

        if (scores.basic === maxScore) {
            recommendedTech = 'basic';
        } else if (scores.advanced === maxScore) {
            recommendedTech = 'advanced';
        } else {
            recommendedTech = 'precision';
        }

        setResult(technologies[recommendedTech]);
        setShowResult(true);
    };

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setAnswers({});
        setShowResult(false);
        setResult(null);
    };

    const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;

    return (
        <section ref={sectionRef} className="tech-quiz-section">
            <div className="quiz-container">
                <div className="quiz-intro">
                    <h2>Descubra a Tecnologia Ideal para Você</h2>
                    <p>Responda nosso quiz personalizado e receba uma recomendação sob medida para sua propriedade rural</p>
                    
                    <div className="quiz-preview">
                        <div className="preview-features">
                            <div className="feature-item">
                                <span className="material-symbols-outlined">quiz</span>
                                <span>5 perguntas rápidas</span>
                            </div>
                            <div className="feature-item">
                                <span className="material-symbols-outlined">psychology</span>
                                <span>Análise personalizada</span>
                            </div>
                            <div className="feature-item">
                                <span className="material-symbols-outlined">recommend</span>
                                <span>Recomendação específica</span>
                            </div>
                        </div>
                        
                        <button className="start-quiz-btn" onClick={openQuiz}>
                            <span className="material-symbols-outlined">play_arrow</span>
                            Iniciar Quiz
                        </button>
                    </div>
                </div>
            </div>

            {isQuizOpen && (
                <div className="quiz-modal-overlay">
                    <div className="quiz-modal">
                        <div className="quiz-header">
                            <h3>Quiz: Tecnologia Agrícola Ideal</h3>
                            <button className="close-btn" onClick={closeQuiz}>
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>

                        {!showResult ? (
                            <div className="quiz-content">
                                <div className="progress-bar">
                                    <div 
                                        className="progress-fill" 
                                        style={{ width: `${progressPercentage}%` }}
                                    ></div>
                                </div>
                                
                                <div className="question-counter">
                                    Pergunta {currentQuestion + 1} de {questions.length}
                                </div>

                                <div className="question">
                                    <h4>{questions[currentQuestion].question}</h4>
                                    
                                    <div className="options">
                                        {questions[currentQuestion].options.map((option, index) => (
                                            <button
                                                key={index}
                                                className="option-btn"
                                                onClick={() => handleAnswer(questions[currentQuestion].id, option)}
                                            >
                                                {option.text}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="quiz-result">
                                <div className="result-header">
                                    <span className="material-symbols-outlined">emoji_events</span>
                                    <h4>Sua Tecnologia Ideal:</h4>
                                </div>

                                <div className="result-content">
                                    <h3>{result.name}</h3>
                                    <p>{result.description}</p>

                                    <div className="result-features">
                                        <h5>O que você terá:</h5>
                                        <ul>
                                            {result.features.map((feature, index) => (
                                                <li key={index}>{feature}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="result-investment">
                                        <div className="investment-item">
                                            <span className="label">Investimento:</span>
                                            <span className="value">{result.investment}</span>
                                        </div>
                                        <div className="investment-item">
                                            <span className="label">ROI:</span>
                                            <span className="value">{result.roi}</span>
                                        </div>
                                    </div>

                                    <div className="result-actions">
                                        <button className="restart-btn" onClick={restartQuiz}>
                                            <span className="material-symbols-outlined">refresh</span>
                                            Fazer Novamente
                                        </button>
                                        <button className="contact-btn" onClick={closeQuiz}>
                                            <span className="material-symbols-outlined">contact_support</span>
                                            Falar com Especialista
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
}

export default TechQuiz;