'use client'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'

import MatchCard from '@/components/MatchCard';

export default function MatchCarousel({ matches }: { matches: any[] }) {
    return (
        <Carousel className="w-full">
            <div className="glass-card flex items-center justify-center sticky z-1000 top-0 shadow-3xl mt-8 mb-4">
                <div className="relative cursor-pointer"><CarouselPrevious /></div>
                <h2 className="text-4xl font-bold text-center text-black dark:text-white">Fase Eliminatória</h2>
                <div className="relative cursor-pointer"><CarouselNext /></div>
            </div>

            <CarouselContent>
                {
                    Object.entries({
                        'LAST_32': '16 Avos',
                        'LAST_16': 'Oitavas de Final',
                        'QUARTER_FINALS': 'Quartas de Final',
                        'SEMI_FINALS': 'Semifinais',
                        'FINAL': 'Final'
                    }).map(([stage, label]) => {
                        const stageMatches = matches.filter(m => m.stage === stage);
                        if (stageMatches.length === 0) return null;

                        return (
                            <CarouselItem
                                key={stage}
                                className="basis-full md:basis-1/2 lg:basis-1/3"
                            >
                                <div key={stage} className="glass-card">
                                    <h3 className="text-2xl font-bold mt-4 mb-2 text-center">{label}</h3>
                                    {
                                        stageMatches.map((match: any) => (
                                            <MatchCard key={match.id} match={match} />
                                        ))
                                    }
                                </div>
                            </CarouselItem>
                        );
                    })
                }

            </CarouselContent>
        </Carousel>
    )
}