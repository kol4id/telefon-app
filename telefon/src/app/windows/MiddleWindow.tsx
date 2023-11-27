import React, { useEffect } from 'react'
import MiddleWindowHead from '../components/MiddleWindowHead';
import MiddleWindowBody from '../components/MiddleWindowBody';
import { useSelector, useDispatch } from 'react-redux';
import useIsSelected from '../utils/hooks/useIsSelected';
import { useFethcing } from '../utils/hooks/useFetching';
import FetchChannelData from '../utils/fetching/fetchChannelData';
import { SetCurrentChannelData, SetCurrentChannelDataPending } from '../../state/currentChannel';

import styles from '../styles/MiddleWindow.module.css'
import { RootState } from '../../state/store';

const MiddleWindow = () =>{
    const dispatch = useDispatch();

    const cursorStyle = useSelector(( state:RootState) => state.cursorStyle.value);
    const channelSelected = useSelector(( state:RootState) => state.channelsList.channelSelected);
    const isChannelDataPending = useSelector((state:RootState) => state.currentChannel.isPending);
    const isChannelSelected = useIsSelected(channelSelected);

    const {fetching, isLoading} = useFethcing(async() =>{
        const data = await FetchChannelData(channelSelected);
        dispatch(SetCurrentChannelData(data));
    })

    useEffect(() =>{
        if (isChannelSelected){
            dispatch(SetCurrentChannelDataPending(true))
            fetching();
        } 
    }, [isChannelSelected])

    useEffect(() =>{
        if(!isLoading){
            dispatch(SetCurrentChannelDataPending(false));
        }
    }, [isLoading])

    return(
        <div className = {styles.middleWindow}
            style={{cursor: cursorStyle}}
        >
            {
                isChannelDataPending
                ? <div/>   
                : <React.Fragment>
                    <MiddleWindowHead/>
                    <MiddleWindowBody/>
                </React.Fragment>
                
            }
            
        </div>
    )
}
export default MiddleWindow;