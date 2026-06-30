import { Match } from '@/types/match';
import Flag from './Flag';

export default function MatchCard({ match }: Readonly<{ match: Match }>) {
    const matchDate = (
        new Date(match.utcDate).toLocaleString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' })
        + ' às ' +
        new Date(match.utcDate).toLocaleString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    )

    const matchStatus = match.status === 'FINISHED' ? 'Finalizado' : 'Não iniciado';

    return (
        <div key={match.id} className="border-t border-zinc-300 dark:border-white-700">
            <div className="items-center px-4 py-2 text-center">
                <div className="text-xs mb-2">
                    {matchDate} ({matchStatus})
                </div>
                <div className="grid grid-cols-[1fr_max-content_1fr] gap-4">
                    <div className="flex items-center justify-end text-right text-2xl font-stretch-semi-condensed">
                        <span className="mr-2">{match.homeTeam.name ?? 'Indefinido'}</span>
                        <Flag team={match.homeTeam} shape="circle" />
                    </div>
                    <div className="flex items-center justify-center text-4xl">
                        {match.score.fullTime.home}
                        <small className="p-3">x</small>
                        {match.score.fullTime.away}
                    </div>
                    <div className="flex items-center justify-start text-left text-2xl font-stretch-semi-condensed">
                        <Flag team={match.awayTeam} shape="circle" />
                        <span className="ml-2">{match.awayTeam.name ?? 'Indefinido'}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}