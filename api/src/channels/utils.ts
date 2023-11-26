export interface IMessage{
    id: number,
    from: number,
    content: string,
}

export interface IChannel{
    id: number,
    title: string,
    content: string,
    messages: IMessage[],
}