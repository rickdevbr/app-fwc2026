import { api } from './api';

export async function getStandings(): Promise<any[]> {
    const response = await api('/competitions/WC/standings');

    response.standings = response.standings.map((standing: any) => ({
        group: standing.group.replace("Group ",""),
        table: standing.table
    }));

    return response;
}