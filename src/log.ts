
export type talk = {
    head: string,
    body: string,
}

export type LogItem = {

    title: string,
    talkItems: talk[],

}

export type LogCollection = {

    logItems: LogItem[],


}

export const a = () => {

}