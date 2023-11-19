import { useEffect, useState } from 'react';
import MessageList from './MessageList';
import InputContainer from './InputContainer';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';

import styles from '../styles/MiddleWindowBody.module.css'


const MiddleWindowBody = () =>{
    const messageInputHeight = useSelector((state:RootState) => state.messageInput.height);

    const DEFAULT_BOTTOM_MARGIN: number = 110;
    const ROW_HEIGHT: number = 20;

    const [bodyBottomMargin, setBodyBottomMargin] = useState<number>(DEFAULT_BOTTOM_MARGIN);
    const [sendMessageMargin, setSendMessageMargin] = useState<number>(0);

    useEffect(() =>{
        const realRows = (messageInputHeight / ROW_HEIGHT) - 1;
        setBodyBottomMargin(DEFAULT_BOTTOM_MARGIN + (realRows * ROW_HEIGHT));
        setSendMessageMargin(realRows * ROW_HEIGHT);
    }, [messageInputHeight])

    return(
        <div className = {styles.body}>
            <div className = {styles.bodyMain}
                style = {{marginBottom: bodyBottomMargin}}
            >     
                <MessageList/>   
            </div>
            <InputContainer sendMessageMargin={sendMessageMargin}/>
        </div>
    )
}
export default MiddleWindowBody;