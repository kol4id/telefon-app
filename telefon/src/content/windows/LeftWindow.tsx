import LeftWindowHead from "../components/LeftWindowHead";
import LeftWindowBody from "../components/LeftWindowBody";
import { useSelector, useDispatch } from "react-redux";

import styles from "../styles/LeftWindow.module.css"
import { RootState } from "../../state/store";

const LeftWindow = () =>{
    const width = useSelector((state:RootState) => state.width.leftWinWidth);
    const cursorStyle = useSelector((state:RootState) => state.cursorStyle.value);

    return(
        <div className = {styles.leftWindow}
            style = {{
                width: width,
                cursor: cursorStyle,
            }}
        >
            <LeftWindowHead/>    
            <LeftWindowBody/>
        </div>
    )
};

export default LeftWindow;