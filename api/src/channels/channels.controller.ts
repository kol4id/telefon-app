import { Body, Controller, Get, Post} from '@nestjs/common';
import { ChannelsService } from './channels.service';
import { Channel } from './schemas/channels.schema';

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
    constructor(private readonly channelsService: ChannelsService){}
    @Get()
    defaultResponce(){
        return 'hi there!';
    }

    @Get('all')
    getAll(): any{
        console.log('asdasdsdas');
        return this.channelsService.findAll();
    }

    @Post()
    createChannel(
        @Body()
        channel
    ){
        return this.channelsService.create(channel);
    }
    // @Get('id')
    // getById(@Query('id') id: number): IChannel{
    //     console.log('returning 1 specific cat with id: ' + id);
    //     const finded = this.channelsService.findChannel(id, channels);
    //     console.log(finded);
    //     return finded;
    // }
}
