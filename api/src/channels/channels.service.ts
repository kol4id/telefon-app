import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose'
import { IChannel } from './utils';
import { Channel } from './schemas/channels.schema';
import { Model } from 'mongoose';

@Injectable()
export class ChannelsService {
    constructor(@InjectModel(Channel.name) private channelModel: Model<Channel>) {}
    // findChannel(id: number, channels: IChannel[]): IChannel{
    //     console.log('returning 1 specific cat with id: ' + id);
    //     return channels.find((channel) => channel.id === id);
    // }

    async findAll(): Promise<Channel[]> {
        const channels = await this.channelModel.find();
        console.log(channels);
        return channels;
    }

    async create(channel: Channel): Promise<Channel>{
        const res = await this.channelModel.create(channel);
        return res;
    }
}
