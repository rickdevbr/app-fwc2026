const BASE_URL = 'https://api.football-data.org/v4';

export async function api<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
        headers: {
            'X-Auth-Token': process.env.NEXT_PUBLIC_FOOTBALL_API_KEY!,
        },
    });

    if (!response.ok) {
        throw new Error(`Erro ${response.status}`);
    }

    return response.json();
}