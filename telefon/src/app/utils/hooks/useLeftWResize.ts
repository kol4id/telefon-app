import { useState, useEffect, FunctionComponent } from "react";
import useMousePosition from "./useMousePosition";
import useMouseDown from "./useMouseDown";
import useWindowWidth from "./useWindowWidth";
import { resize } from "../../../state/width";
import { useDispatch } from "react-redux";

import { IPosition } from "../../interfaces/IMousePos";

const useLeftWResize = () =>{

    const dispatch = useDispatch();
    const width: number = useWindowWidth();
    const {isMouseDown, mouseDownPosition, position} = useMouseDown();
    const mousePos: IPosition = useMousePosition();

    const RESIZEOFFSET: number = 5;
    const MINWINDOWWIDTH: number = 200;

    const [windowWidth, setWindowWidth] = useState<number>(300);
    const [currentlyResizing, setCurrentlyResizing] = useState<boolean>(false);
    const [maxWindowWidth, setMaxWindowWidth] = useState<number>(Math.ceil(width / 3.3))
    const [inResizePosition, setInResizePosition] = useState<boolean>(false);
    
    const CorrectPosition = (): number =>{
        if (mousePos.x < MINWINDOWWIDTH){
            return MINWINDOWWIDTH;
        } else if ( mousePos.x > maxWindowWidth){
            return maxWindowWidth;
        } else {
            return mousePos.x;
        }
    }

    useEffect(()=>{
        let isCurrentlyResizing: boolean = currentlyResizing;
        if (!isMouseDown){ 
            isCurrentlyResizing = false;
        }

        if (mousePos.x > windowWidth - RESIZEOFFSET &&
            mousePos.x < windowWidth + RESIZEOFFSET){
            setInResizePosition(true);
            if (isMouseDown){
                isCurrentlyResizing = true;
            }
        } else {
            setInResizePosition(false);
        }
        
        if (isCurrentlyResizing){ 
            setWindowWidth(CorrectPosition());
            dispatch(resize(windowWidth));
        }
        setCurrentlyResizing(isCurrentlyResizing);
    }, [mousePos, mouseDownPosition])

    useEffect(() =>{
        let newWidth = Math.ceil(width / 3.3);
        if (newWidth < MINWINDOWWIDTH){
            newWidth = MINWINDOWWIDTH;    
        }

        setMaxWindowWidth(newWidth);
        if (windowWidth > newWidth){
            setWindowWidth(newWidth);
            dispatch(resize(newWidth));
        }
    }, [width])

    return {inResizePosition, currentlyResizing};
}

export default useLeftWResize;