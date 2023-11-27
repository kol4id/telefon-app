import MessageInput from './MessageInput';

import styles from '../styles/InputContainer.module.css'

interface IProps{
    sendMessageMargin: number;
}

const InputContainer = (props: IProps) =>{
    return(
        <div className = {styles.inputContainer}>
            <div className = {styles.inputBox}>
                <MessageInput/>
            </div>
            <div className = {styles.sendMessageButton}
                style={{marginTop: props.sendMessageMargin}}
            >
            </div>
        </div>
    )
}
export default InputContainer;