import { Controller, Get, Query } from '@nestjs/common';
import channels from './utils';

interface IMessage{
    id: number,
    from: number,
    content: string,
}

interface IChannel{
    id: number,
    title: string,
    content: string,
    messages: IMessage[],
}

@Controller('channels')
export class ChannelsController {
    @Get()
    defaultResponce(){
        return 'hi there!';
    }


    @Get('all')
    getAll(): IChannel[]{
        console.log('asdasdsdas');
        return channels
    }

    @Get('id')
    getById(@Query('id') id: number): IChannel{
        console.log('returning 1 specific cat with id: ' + id);
        return channels[2];
    }
}
