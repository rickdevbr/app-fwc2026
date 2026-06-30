import { getStandings } from '@/services/standings.service';
import { getMatches } from '@/services/matches.service';
import GroupTable from '@/components/GroupTable';
import MatchCard from '@/components/MatchCard';
import MatchCarousel from '@/components/MatchCarousel';

export default async function Home() {
    const standings = await getStandings();
    const matches = await getMatches();

    return (
        <div className="flex flex-col flex-1 items-center justify-centerfont-sans">
            <main className="flex flex-1 w-full flex-col items-center justify-between p-8">
                <h1 className="queer-title text-6xl m-auto font-bold text-black dark:text-white font-stretch-expanded w-100 text-center">
                    Copa do Mundo 2026
                </h1>
                <div className="mt-6 w-full">
                    <h2 className="glass-card text-4xl font-bold text-black dark:text-white font-stretch-normal text-center mb-4">Fase de Grupos</h2>
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                        {
                            standings.standings.map((standing) => (
                                <div key={standing.group} className="glass-card">
                                    <GroupTable group={standing.group} table={standing.table} />
                                    <details className="mt-2">
                                        <summary className="cursor-pointer text-center text-sm font-bold text-black dark:text-white font-stretch-condensed">Ver Jogos</summary>
                                        <div className="mt-2">
                                            <h3 className="text-lg font-bold mb-2 text-center">Jogos</h3>
                                            {
                                                matches.matches.filter(m => m.group === `GROUP_${standing.group}`).map((match: any) => (
                                                    <MatchCard key={match.id} match={match} />
                                                ))
                                            }
                                        </div>
                                    </details>
                                </div>
                            ))
                        }
                    </div>

                    <MatchCarousel matches={matches.matches} />
                </div>
            </main>
        </div>
    );
}
