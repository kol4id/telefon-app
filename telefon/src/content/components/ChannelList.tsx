import {useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux'
import { IChannel } from '../interfaces/IChannel' 
import { RootState } from '../../state/store'
import image from '../pig.jpeg'

import styles from '../styles/ChannelList.module.css'

interface Props{
    channel: IChannel,
    styleNum: number,
    select: CallableFunction,
    key: number,
}

const ChannelList = (props: Props) => {
    const width = useSelector((state:RootState) => state.width.channelWidth);
    const wordwrapWidth = useSelector((state:RootState) => state.width.channelWrapWidth);

    const [channelStyle, setChannelStyle] = useState<string>(styles.channel);

    useEffect(() => {
        props.styleNum
        ? setChannelStyle(styles.channelSelected)
        : setChannelStyle(styles.channel)
    })

    return(
        <div className = {channelStyle}
            onClick = {() => {props.select(props.channel.id)}}
            key = {props.key}
            style = {{ width: width }}
        >
            <div className = {styles.channelImg}> 
                <img src = {image}/>
            </div>

            <div className = {styles.channelContent}>

                <div className = {styles.channelHeader}>
                    {props.channel.title}
                </div>

                <div className = {styles.channelBody}
                    style={{maxWidth: wordwrapWidth}}
                >
                    {props.channel.content}
                </div>
                
            </div>
        </div>
    )
}

export default ChannelList;