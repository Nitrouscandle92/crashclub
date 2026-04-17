export interface ClanConfig {
    tag: string;
    name: string;
    info: string;
}

export interface WarLeague {
    id: number;
    name: string;
}

export interface BadgeUrls {
    small?: string;
    medium?: string;
    large?: string;
}

export interface ClanData {
    tag: string;
    name: string;
    description?: string;
    clanPoints?: number;
    members?: number;
    warWins?: number;
    warLeague?: WarLeague;
    badgeUrls?: BadgeUrls;
    badgeUrlMedium?: string;
}