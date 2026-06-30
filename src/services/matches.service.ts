import { api } from './api';

export async function getMatches() {
    return api('/competitions/WC/matches');
}

export async function getMatch(id: number) {
    return api(`/matches/${id}`);
}