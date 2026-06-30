export interface Competition {
    id: number
    name: string
    code: string
    type: string
    emblem: string
}

export interface Area {
    id: number
    name: string
    code: string
    flag: string | null
}

export interface Season {
    id: number
    startDate: string
    endDate: string
    currentMatchday: number
    winner: null
}