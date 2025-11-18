import React, { useState } from 'react';
import './ClimateSimulator.scss';

function ClimateSimulator({ sectionRef }) {
    const [selectedRegion, setSelectedRegion] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    // Dados climáticos mockados para diferentes regiões
    const climateData = {
        sul: {
            name: "Região Sul",
            temperature: 18,
            humidity: 75,
            precipitation: 120,
            windSpeed: 12,
            condition: "Temperado",
            icon: "ac_unit",
            color: "#4A90E2"
        },
        sudeste: {
            name: "Região Sudeste",
            temperature: 24,
            humidity: 68,
            precipitation: 90,
            windSpeed: 15,
            condition: "Subtropical",
            icon: "wb_sunny",
            color: "#F5A623"
        },
        centroOeste: {
            name: "Região Centro-Oeste",
            temperature: 28,
            humidity: 55,
            precipitation: 60,
            windSpeed: 18,
            condition: "Tropical",
            icon: "wb_twilight",
            color: "#E67E22"
        },
        nordeste: {
            name: "Região Nordeste",
            temperature: 32,
            humidity: 45,
            precipitation: 30,
            windSpeed: 20,
            condition: "Semiárido",
            icon: "local_fire_department",
            color: "#E74C3C"
        },
        norte: {
            name: "Região Norte",
            temperature: 30,
            humidity: 85,
            precipitation: 200,
            windSpeed: 10,
            condition: "Equatorial",
            icon: "water_drop",
            color: "#27AE60"
        }
    };

    // Recomendações baseadas no clima
    const getRecommendations = (data) => {
        const recommendations = [];

        // Recomendações baseadas em temperatura
        if (data.temperature > 30) {
            recommendations.push({
                type: "warning",
                icon: "thermostat",
                title: "Temperatura Elevada",
                description: "Considere aumentar a frequência de irrigação e usar cobertura vegetal para proteger o solo."
            });
        } else if (data.temperature < 20) {
            recommendations.push({
                type: "info",
                icon: "ac_unit",
                title: "Temperatura Baixa",
                description: "Monitore possíveis geadas. Considere usar estufas ou coberturas para culturas sensíveis."
            });
        }

        // Recomendações baseadas em umidade
        if (data.humidity < 50) {
            recommendations.push({
                type: "warning",
                icon: "water_drop",
                title: "Umidade Baixa",
                description: "Aumente a irrigação e considere sistemas de gotejamento para economia de água."
            });
        } else if (data.humidity > 80) {
            recommendations.push({
                type: "info",
                icon: "opacity",
                title: "Alta Umidade",
                description: "Atenção para doenças fúngicas. Mantenha boa ventilação e espaçamento adequado entre plantas."
            });
        }

        // Recomendações baseadas em precipitação
        if (data.precipitation < 50) {
            recommendations.push({
                type: "critical",
                icon: "water_drop",
                title: "Baixa Precipitação",
                description: "Implemente sistema de irrigação eficiente. Considere culturas resistentes à seca."
            });
        } else if (data.precipitation > 150) {
            recommendations.push({
                type: "info",
                icon: "rainy",
                title: "Alta Precipitação",
                description: "Garanta boa drenagem do solo. Monitore possíveis alagamentos e erosão."
            });
        }

        // Recomendações baseadas em vento
        if (data.windSpeed > 15) {
            recommendations.push({
                type: "warning",
                icon: "air",
                title: "Vento Forte",
                description: "Considere usar quebra-ventos ou estruturas de proteção para culturas sensíveis."
            });
        }

        // Recomendação geral baseada na condição
        if (data.condition === "Semiárido") {
            recommendations.push({
                type: "critical",
                icon: "eco",
                title: "Região Semiárida",
                description: "Priorize tecnologias de irrigação de precisão e sensores de umidade do solo para otimizar o uso de água."
            });
        }

        return recommendations;
    };

    const handleRegionSelect = (regionKey) => {
        setIsLoading(true);
        setSelectedRegion(null);
        
        // Simula carregamento de dados
        setTimeout(() => {
            setSelectedRegion(climateData[regionKey]);
            setIsLoading(false);
        }, 800);
    };

    const recommendations = selectedRegion ? getRecommendations(selectedRegion) : [];

    return (
        <section ref={sectionRef} className="climate-simulator-section">
            <div className="container">
                <div className="simulator-header">
                    <h2>Simulador de Condições Climáticas</h2>
                    <p>Selecione uma região e descubra as condições climáticas e recomendações personalizadas para sua lavoura</p>
                </div>

                <div className="simulator-content">
                    {/* Seletor de Regiões */}
                    <div className="regions-selector">
                        <h3>Selecione uma Região</h3>
                        <div className="regions-grid">
                            {Object.entries(climateData).map(([key, region]) => (
                                <button
                                    key={key}
                                    className={`region-card ${selectedRegion?.name === region.name ? 'selected' : ''}`}
                                    onClick={() => handleRegionSelect(key)}
                                    style={{ '--region-color': region.color }}
                                >
                                    <span className="material-symbols-outlined">{region.icon}</span>
                                    <span className="region-name">{region.name}</span>
                                    <span className="region-condition">{region.condition}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Resultados e Recomendações */}
                    {isLoading && (
                        <div className="loading-state">
                            <div className="spinner"></div>
                            <p>Analisando condições climáticas...</p>
                        </div>
                    )}

                    {selectedRegion && !isLoading && (
                        <div className="results-container">
                            {/* Dados Climáticos */}
                            <div className="climate-data">
                                <h3>Condições Atuais - {selectedRegion.name}</h3>
                                <div className="data-grid">
                                    <div className="data-card temperature">
                                        <span className="material-symbols-outlined">thermostat</span>
                                        <div className="data-value">{selectedRegion.temperature}°C</div>
                                        <div className="data-label">Temperatura</div>
                                    </div>
                                    <div className="data-card humidity">
                                        <span className="material-symbols-outlined">humidity_percentage</span>
                                        <div className="data-value">{selectedRegion.humidity}%</div>
                                        <div className="data-label">Umidade</div>
                                    </div>
                                    <div className="data-card precipitation">
                                        <span className="material-symbols-outlined">rainy</span>
                                        <div className="data-value">{selectedRegion.precipitation}mm</div>
                                        <div className="data-label">Precipitação Mensal</div>
                                    </div>
                                    <div className="data-card wind">
                                        <span className="material-symbols-outlined">air</span>
                                        <div className="data-value">{selectedRegion.windSpeed} km/h</div>
                                        <div className="data-label">Velocidade do Vento</div>
                                    </div>
                                </div>
                            </div>

                            {/* Recomendações */}
                            {recommendations.length > 0 && (
                                <div className="recommendations">
                                    <h3>
                                        <span className="material-symbols-outlined">lightbulb</span>
                                        Recomendações Personalizadas
                                    </h3>
                                    <div className="recommendations-list">
                                        {recommendations.map((rec, index) => (
                                            <div key={index} className={`recommendation-card ${rec.type}`}>
                                                <div className="rec-icon">
                                                    <span className="material-symbols-outlined">{rec.icon}</span>
                                                </div>
                                                <div className="rec-content">
                                                    <h4>{rec.title}</h4>
                                                    <p>{rec.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Ação */}
                            <div className="action-section">
                                <p>Quer implementar essas recomendações na sua propriedade?</p>
                                <button className="cta-button">
                                    <span className="material-symbols-outlined">contact_support</span>
                                    Falar com Especialista
                                </button>
                            </div>
                        </div>
                    )}

                    {!selectedRegion && !isLoading && (
                        <div className="empty-state">
                            <span className="material-symbols-outlined">location_on</span>
                            <p>Selecione uma região acima para ver as condições climáticas e recomendações</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default ClimateSimulator;

