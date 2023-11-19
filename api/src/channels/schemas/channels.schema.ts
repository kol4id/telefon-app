import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import { HydratedDocument} from "mongoose";
import { IMessage } from '../utils';


export type ChannelDocument = HydratedDocument<Channel>;

@Schema({
    timestamps: true
})
export class Channel{
    @Prop()
    id: number;

    @Prop()
    title: string;

    @Prop()
    content: string;

    @Prop()
    messages: IMessage[];
}

export const ChannelSchema = SchemaFactory.createForClass(Channel);