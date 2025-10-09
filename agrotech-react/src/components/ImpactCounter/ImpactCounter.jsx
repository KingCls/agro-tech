import React, { useState, useEffect, useRef } from 'react';
import './ImpactCounter.scss';

function ImpactCounter({ sectionRef }) {
    const [counters, setCounters] = useState({
        water: 0,
        co2: 0,
        properties: 0,
        area: 0
    });

    const [hasAnimated, setHasAnimated] = useState(false);
    const sectionElementRef = useRef(null);

    const finalValues = {
        water: 2500000,
        co2: 1850,
        properties: 320,
        area: 15000
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        setHasAnimated(true);
                        animateCounters();
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (sectionElementRef.current) {
            observer.observe(sectionElementRef.current);
        }

        return () => {
            if (sectionElementRef.current) {
                observer.unobserve(sectionElementRef.current);
            }
        };
    }, [hasAnimated]);

    const animateCounters = () => {
        const duration = 2000;
        const steps = 60;
        const stepDuration = duration / steps;

        let currentStep = 0;

        const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;

            setCounters({
                water: Math.floor(finalValues.water * progress),
                co2: Math.floor(finalValues.co2 * progress),
                properties: Math.floor(finalValues.properties * progress),
                area: Math.floor(finalValues.area * progress)
            });

            if (currentStep >= steps) {
                clearInterval(timer);
                setCounters(finalValues);
            }
        }, stepDuration);
    };

    const formatNumber = (num) => {
        return num.toLocaleString('pt-BR');
    };

    return (
        <section ref={sectionRef} className="impact-section">
            <div ref={sectionElementRef} className="container">
                <div className="header">
                    <h2>Nosso Impacto Real</h2>
                    <p>Resultados concretos de quem já adotou tecnologia sustentável</p>
                </div>

                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <span className="material-symbols-outlined">water_drop</span>
                        </div>
                        <div className="content">
                            <div className="number">{formatNumber(counters.water)}</div>
                            <div className="label">Litros de água economizados</div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="icon co2">
                            <span className="material-symbols-outlined">eco</span>
                        </div>
                        <div className="content">
                            <div className="number">{formatNumber(counters.co2)}</div>
                            <div className="label">Toneladas de CO₂ reduzidas</div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="icon properties">
                            <span className="material-symbols-outlined">agriculture</span>
                        </div>
                        <div className="content">
                            <div className="number">{formatNumber(counters.properties)}</div>
                            <div className="label">Propriedades beneficiadas</div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="icon area">
                            <span className="material-symbols-outlined">landscape</span>
                        </div>
                        <div className="content">
                            <div className="number">{formatNumber(counters.area)}</div>
                            <div className="label">Hectares monitorados</div>
                        </div>
                    </div>
                </div>

                <div className="footer">
                    <p>Dados atualizados em tempo real • Última atualização: Outubro 2025</p>
                </div>
            </div>
        </section>
    );
}

export default ImpactCounter;
