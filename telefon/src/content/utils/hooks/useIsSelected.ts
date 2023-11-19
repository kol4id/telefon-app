import {useState, useEffect} from 'react'

const useIsSelected  = (channelSelected: number): boolean =>{
    const [isSelected, setIsSelected] = useState<boolean>(false);
    
    useEffect(()=>{
        setIsSelected(false);
        if (channelSelected >= 0){
            setIsSelected(true);
        }
    },[channelSelected])
    
    return isSelected;
}

export default useIsSelected;