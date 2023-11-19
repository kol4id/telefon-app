import { createSlice } from "@reduxjs/toolkit";

interface ICursorStyle{
    value: string,
}

const initialState: ICursorStyle = {
    value: 'default',
}

const styleSlice = createSlice({
    name: 'cursorStyle',
    initialState,
    reducers:{
        setCursorStyle(state, action){
            if (action.payload){
                state.value = 'ew-resize';
            } else state.value = 'default';
        }
    }
})

export const {setCursorStyle} = styleSlice.actions;
export default styleSlice.reducer;