
export interface TimeSpent {
    current: number,
    previous: number,
}

export interface TimeFrames {
    daily: TimeSpent,
    weekly: TimeSpent,
    monthly: TimeSpent,
}

export default interface Card {
    title: string,
    timeframes: TimeFrames
}

export interface TimePeriod {
    timespent: TimeSpent,
    period: string
}
