import React from 'react';

const Hero: React.FC = () => {
    return (
        <header className="hero">
            <h2>Willkommen im</h2>
            <h1>Crashclub</h1>
            <p>Ob entspanntes Farming, strukturierter CW-Alltag oder das gemeinsame Ziel, taktisch auf das nächste Level zu wachsen – bei uns findest du dein passendes Zuhause.</p>
            <div className="slogan">Let’s clash. Let’s win. Let’s crash it!</div>

            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '20px' }}>
                <a href="#clans" className="cta-button">Unsere Clans entdecken</a>
                <a href="https://discord.gg/D8phqXBMC8" target="_blank" rel="noopener noreferrer" className="cta-button" style={{ background: '#5865F2', border: 'none' }}>
                    <img src="/Discord-Symbol-White.svg" alt="Discord" style={{ width: '20px', verticalAlign: 'middle', marginRight: '10px' }} />
                    Discord beitreten
                </a>

                <a href="https://discord.gg/D8phqXBMC8" className="discord-float" target="_blank" rel="noopener noreferrer" title="Triff uns auf Discord">
                    <img src="/Discord-Symbol-White.svg" alt="Discord Float" style={{ width: '30px' }} />
                </a>
            </div>
        </header>
    );
};

export default Hero;