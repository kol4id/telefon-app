import styles from '../styles/LeftWindowHead.module.css'
import ChannelSearch from './ChannelSearch';

const LeftWindowHead = () =>{
    return(
        <div className = {styles.header}>
            <div className = {styles.headerTop}>
                <div className = {styles.headerTopMenu}/>
                <ChannelSearch/>
            </div>
        </div>
    )
};
export default LeftWindowHead