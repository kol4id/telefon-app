import { IMessage } from '../interfaces/IMessage';

import styles from '../styles/Message.module.css';

interface IProps{
    message: IMessage,
};

const Message = (props: IProps) =>{

    return(
        <div
            className = {
                props.message.from
                ? styles.messageStringFrom
                : styles.messageStringTo
        }>
            <div className = {styles.messageBlock}>
                <div className = {styles.messageContent}>
                    {props.message.content}
                </div>
            </div>
        </div>
    )
}
export default Message;