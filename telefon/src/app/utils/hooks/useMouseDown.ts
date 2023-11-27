import {useState, useEffect} from 'react';
import { IPosition } from '../../interfaces/IMousePos';


const useMouseDown = () =>{
    const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
    const [mouseDownPosition, setMouseDownPosition] = useState<IPosition>({x: 0, y:0});
    const [position, setPosition] = useState<IPosition>({x: 0, y: 0});

    const HandleMouseMove = (event: MouseEvent): void =>{
        setPosition({x: event.clientX, y: event.clientY});
    }

    const HandleMouseClick = (event: MouseEvent): void =>{
        setIsMouseDown(true);
        setMouseDownPosition({x: event.clientX, y: event.clientY});
    }

    useEffect(() =>{
        window.addEventListener('mousedown', HandleMouseClick);
        window.addEventListener('mouseup', () => setIsMouseDown(false));
        window.addEventListener('mousemove', HandleMouseMove);

        return () => {
            window.removeEventListener('mousedown', HandleMouseClick);
            window.removeEventListener('mouseup', () => setIsMouseDown(false));
            window.removeEventListener('mousemove', HandleMouseMove)
        }
    }, [])

    return {isMouseDown, mouseDownPosition, position};
}

export default useMouseDown;