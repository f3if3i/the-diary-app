export const createArray = (length: number, start: number) => {
    return [...Array(length).keys()].map(i => i + start)
}