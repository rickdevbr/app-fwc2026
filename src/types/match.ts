import { Team } from './team'
import { Area, Competition, Season } from './competition'

export type MatchStatus =
    | 'SCHEDULED'
    | 'TIMED'
    | 'IN_PLAY'
    | 'PAUSED'
    | 'FINISHED'

export type MatchStage =
    | 'GROUP_STAGE'
    | 'LAST_32'
    | 'LAST_16'
    | 'QUARTER_FINALS'
    | 'SEMI_FINALS'
    | 'THIRD_PLACE'
    | 'FINAL'

export interface MatchScoreTime {
    home: number | null
    away: number | null
}

export interface Score {
    winner: 'HOME_TEAM' | 'AWAY_TEAM' | 'DRAW' | null
    duration: 'REGULAR' | 'EXTRA_TIME' | 'PENALTY_SHOOTOUT'
    fullTime: MatchScoreTime
    halfTime: MatchScoreTime
}

export interface Referee {
    id: number
    name: string
    type: string
    nationality: string
}

export interface Match {
    area: Area
    competition: Competition
    season: Season
    id: number
    utcDate: string
    status: MatchStatus
    matchday: number
    stage: MatchStage
    group: string | null
    lastUpdated: string
    homeTeam: Team
    awayTeam: Team
    score: Score
    referees: Referee[]
}

export interface MatchesResponse {
    matches: Match[]
}