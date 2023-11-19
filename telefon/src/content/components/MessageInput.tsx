import TextareaAutosize from 'react-textarea-autosize';
import { useSelector, useDispatch } from 'react-redux';
import { setInputValue, setHeightValue } from '../../state/messageInput';
import styles from '../styles/MessageInput.module.css'
import { RootState } from '../../state/store';

const MessageInput = () =>{
    const value = useSelector((state:RootState) => state.messageInput.value)
    const dispatch = useDispatch();

    return(
       <TextareaAutosize className = {styles.textarea}
            value = {value}
            onChange = {(e) => dispatch(setInputValue(e.target.value))}
            minRows = {1}
            maxRows = {15}
            onHeightChange = {(height) => dispatch(setHeightValue(height))}
       /> 
    )
}
export default MessageInput;