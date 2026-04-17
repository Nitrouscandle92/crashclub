import React from 'react';
import type { ClanConfig, ClanData } from '../types/clan';

interface ClanCardProps {
    config: ClanConfig;
    data?: ClanData | null;
}

const ClanCard: React.FC<ClanCardProps> = ({ config, data }) => {

    const processDescription = (desc?: string): string => {
        if (!desc) return "Keine Ingame-Beschreibung verfügbar.";
        return desc.replace(/ {2,}/g, '\n').split('\n').map(line => line.trim()).join('\n');
    };

    const logoSrc = data?.badgeUrlMedium || data?.badgeUrls?.medium || '';
    const description = processDescription(data?.description);
    const trophies = data?.clanPoints ? data.clanPoints.toLocaleString() : '...';
    const members = data?.members || '...';
    const warWins = data?.warWins ?? '...';
    const league = data?.warLeague?.name || 'Nicht platziert';

    return (
        <div className="clan-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
                {logoSrc && <img src={logoSrc} alt={`${config.name} Logo`} style={{ width: '45px', height: '45px', objectFit: 'contain' }} />}
                <h3 style={{ margin: 0 }}>{config.name}</h3>
            </div>
            <p className="clan-info">{config.info}</p>
            <div className="clan-desc">
                {data ? description : 'Lade Ingame-Text...'}
            </div>
            <div className="clan-stats-grid">
                <div><span className="stat-lbl">Trophäen: </span><span className="stat-val">{trophies}</span></div>
                <div><span className="stat-lbl">Mitglieder: </span><span className="stat-val">{members}/50</span></div>
                <div><span className="stat-lbl">Gewonnene CW's: </span><span className="stat-val">{warWins}</span></div>
                <div><span className="stat-lbl">CWL Liga: </span><span className="stat-val">{league}</span></div>
            </div>
            <a href={`https://link.clashofclans.com/en?action=OpenClanProfile&tag=${config.tag}`} className="clan-btn" target="_blank" rel="noopener noreferrer">
                Zum Clan
            </a>
        </div>
    );
};

export default ClanCard;