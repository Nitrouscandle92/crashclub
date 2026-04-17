import React from 'react';
import './styles/global.css';
import Hero from './components/Hero';
import { About, Vision, Rules, Join, Benefits } from './components/StaticSections';
import ClanList from './components/ClanList';

const App: React.FC = () => {
    return (
        <>
            <Hero />
            <About />
            <Vision />
            <Rules />
            <Join />
            <Benefits />
            <ClanList />
            <footer>
                <p>&copy; 2026 The Crashclub Clan-Familie. Alle Rechte vorbehalten.</p>
            </footer>
        </>
    );
};

export default App;