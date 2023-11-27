import React, {FunctionComponent, useEffect, useMemo, useState} from 'react'
import Message from './Message'
import { useSelector } from 'react-redux'
import { RootState } from '../../state/store';
import { IMessage } from '../interfaces/IMessage';


const MessageList: FunctionComponent = () =>{

    const messages: IMessage[] = useSelector((state:RootState) => state.currentChannel.channel.messages)

    return(
        <React.Fragment>
            {
                messages.map((message, index) =>
                    <Message message = {message}/>
                )
            }
        </React.Fragment>
    )
}
export default MessageList;