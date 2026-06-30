export interface Team {
    id: number
    name: string
    shortName: string
    tla: string
    crest: string
}

export interface StandingTableItem {
    position: number
    team: Team
    playedGames: number
    form: string | null
    won: number
    draw: number
    lost: number
    points: number
    goalsFor: number
    goalsAgainst: number
    goalDifference: number
}

export interface Standing {
    stage: 'ALL'
    type: 'TOTAL'
    group: string
    table: StandingTableItem[]
}

export interface StandingsResponse {
    standings: Standing[]
}