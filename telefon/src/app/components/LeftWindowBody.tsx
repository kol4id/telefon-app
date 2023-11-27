import ChannelList from "./ChannelList";
import styles from '../styles/LeftWindowBody.module.css'
import { useSelector, useDispatch} from "react-redux";
import {SetChannelSelected } from "../../state/channels";
import { RootState } from "../../state/store";
import { useEffect } from "react";

const LeftWindowBody = () => {
    const channels = useSelector((state:RootState) => state.channelsList.channels);
    const channelSelected = useSelector((state:RootState) => state.channelsList.channelSelected);
    const dispatch = useDispatch();
   
    const selectChannel = (id: number): void =>{
        dispatch(SetChannelSelected(id));
    }

    useEffect(() =>{
        console.log("render body");
    },[])

    return (
        <div className = {styles.body}>
            <div className = {styles.bodyMain}>
                {
                    channels.map((channel, index) => 
                        channelSelected === channel.id
                        ? <ChannelList channel = {channel} styleNum = {1} select = {selectChannel}  key={index}/>
                        : <ChannelList channel = {channel} styleNum = {0} select = {selectChannel} key={index}/>
                    )  
                }
            </div>
        </div>
    )
}

export default LeftWindowBody;