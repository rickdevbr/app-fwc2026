import { api } from './api';
import { Match, MatchesResponse } from '@/types/match';

export async function getMatches(): Promise<MatchesResponse> {
    return api('/competitions/WC/matches');
}

export async function getMatch(id: number): Promise<Match> {
    return api(`/matches/${id}`);
}