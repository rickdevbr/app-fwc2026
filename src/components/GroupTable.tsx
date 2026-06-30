import { StandingTableItem } from '@/types/standings';

import Flag from '@/components/Flag';

export default function GroupTable({ group, table }: Readonly<{ group: string, table: StandingTableItem[] }>) {
    return (
        <div>
            <h3 className="text-3xl font-bold text-black dark:text-white font-stretch-condensed">Grupo {group}</h3>
            <table className="w-full mt-2 border-zinc-300 dark:border-white-700 font-stretch-semi-condensed ">
                <thead>
                    <tr>
                        <th className="px-4 py-2 text-center">Time</th>
                        <th className="px-4 py-2 text-center">PG</th>
                        <th className="px-4 py-2 text-center">J</th>
                        <th className="px-4 py-2 text-center">V</th>
                        <th className="px-4 py-2 text-center">E</th>
                        <th className="px-4 py-2 text-center">D</th>
                        <th className="px-4 py-2 text-center">SG</th>
                    </tr>
                </thead>
                <tbody>
                    {table.map((team: StandingTableItem) => (
                        <tr key={team.team.id} className="border-t border-zinc-300 dark:border-white-700">
                            <td className="px-4 py-2">
                                <Flag team={team.team} />
                                <span className="ml-2">{team.team.name}</span>
                            </td>
                            <td className="px-4 py-2 text-center">{team.points}</td>
                            <td className="px-4 py-2 text-center">{team.playedGames}</td>
                            <td className="px-4 py-2 text-center">{team.won}</td>
                            <td className="px-4 py-2 text-center">{team.draw}</td>
                            <td className="px-4 py-2 text-center">{team.lost}</td>
                            <td className="px-4 py-2 text-center">{team.goalsFor - team.goalsAgainst}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}