import { api } from './api';
import { Standing, StandingsResponse } from '@/types/standings';

export async function getStandings(): Promise<StandingsResponse> {
    const response: StandingsResponse = await api('/competitions/WC/standings');

    response.standings = response.standings.map((standing: Standing) => ({
        stage: standing.stage,
        type: standing.type,
        group: standing.group.replace("Group ", ""),
        table: standing.table
    }));

    return response;
}