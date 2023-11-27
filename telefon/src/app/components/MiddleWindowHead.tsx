import { useSelector } from 'react-redux';

import styles from '../styles/MiddleWindowHead.module.css'
import { RootState } from '../../state/store';


const MiddleWindowHead = () =>{
    const channelName = useSelector((state:RootState) => state.currentChannel.channel.title);
    const isChannelDataPending = useSelector((state:RootState) => state.currentChannel.isPending);
    return(
        <div className = {styles.head}>
            {
                isChannelDataPending
                ?<></>
                :channelName
            }
        </div>
    )
}
export default MiddleWindowHead;