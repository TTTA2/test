
export interface talk {
    head: string,
    body: string,
}

export interface LogItem {

    title: string,
    talkItems: talk[],

}

export interface LogCollection {

    logItems: LogItem[],


}

export const a = () => {

}