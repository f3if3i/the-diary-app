export type Meals = {
    breakfast?: string,
    lunch?: string,
    dinner?: string,
}

export interface Diary {
    datetime: string
    id: string,
    title: string,
    content: string,
    mood: string,
    meals?: Meals,
    location: string,
    weather: string
}