import React, { useEffect, useState } from 'react';
import ClanCard from './ClanCard';
import type {ClanConfig, ClanData} from '../types/clan.ts';

const CLAN_CONFIGS: ClanConfig[] = [
    { tag: '2YGYQPYP9', name: 'The Crashclub', info: 'Hauptclan | Dauer CW | ab RH17 & Liga 30' },
    { tag: '2JU2GYQVP', name: 'Crashhasen', info: 'Dauer CW | ab RH16 max & Liga 22' },
    { tag: '2YV0RQ0V9', name: 'The Crashclub 2', info: 'Farming & Progress | ab RH15 max & Liga 20' },
    { tag: '2LC2P02CY', name: 'The Crashclub 3', info: 'Farming & Progress | ab RH14 max' },
    { tag: '2QPPGGUJQ', name: 'The Crashclub 4', info: 'Farming & Progress | ab RH13' }
];

const ClanList: React.FC = () => {
    const [clansData, setClansData] = useState<ClanData[]>([]);

    useEffect(() => {
        const fetchClans = async () => {
            try {
                const response = await fetch('https://api.thecrashclub.de/api/clans/all');
                if (!response.ok) throw new Error('Backend not reachable');

                const data: ClanData[] = await response.json();
                setClansData(data);
            } catch (error) {
                console.error("Error loading clans:", error);
            }
        };

        fetchClans();
    }, []);

    return (
        <section id="clans">
            <h2 className="section-title">Unsere Clanfamilie</h2>
            <p style={{ textAlign: 'center', marginBottom: '40px', color: '#888' }}>
                Live-Statistiken direkt aus dem Spiel | Klicke auf den Button für das Profil.
            </p>

            <div className="grid">
                {CLAN_CONFIGS.map(config => {
                    const fetchedData = clansData.find(c => c.tag.replace('#', '') === config.tag);
                    return <ClanCard key={config.tag} config={config} data={fetchedData} />;
                })}
            </div>
        </section>
    );
};

export default ClanList;