import { IMessage } from "./IMessage";

export interface IChannel{
    id: number,
    title: string,
    content: string,
    messages: IMessage[],
}

interface IChannelSelected{
    channelSelected: number;
}


export interface IChannelState extends IChannelSelected{
    channels: IChannel[],
}

