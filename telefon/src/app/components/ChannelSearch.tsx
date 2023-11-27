import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue } from '../../state/channelSearch';

import styles from "../styles/ChannelSearch.module.css"
import { RootState } from '../../state/store';

const ChannelSearch = () =>{
    const [focus, setFocus] = useState<boolean>(false);
    const [searchStyle, setSearchStyle] = useState<string>(styles.channelSearchLine)
    const value = useSelector((state: RootState) => state.channelSearch.value)
    const width = useSelector((state: RootState) => state.width.searchWidth)
    const dispatch = useDispatch();

    useEffect(()=>{
        focus
        ? setSearchStyle(styles.channelSearchLineFocused)
        : setSearchStyle(styles.channelSearchLine)
    }, [focus])

    return(
        <div className = {searchStyle}>
            <input
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                onChange={(e) => dispatch(setSearchValue(e.target.value))}
                value={value}
                style={{width: width}}
            />
            <div className={styles.inputClear}
                onClick={() => dispatch(setSearchValue(''))}
            />
        </div>
    )
};

export default ChannelSearch;