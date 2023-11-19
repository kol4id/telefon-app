import { createSlice } from "@reduxjs/toolkit";

interface MessageInput{
    value: string;
    height: number;
};

const initialState: MessageInput = {
    value: '',
    height: 20,
};

const messageInputSlice = createSlice({
    name: 'messageInput',
    initialState,
    reducers: {
        setInputValue(state, action){
            state.value = action.payload;
        },
        setHeightValue(state, action){
            state.height = action.payload;
        }
    }
});

export const {setInputValue, setHeightValue} = messageInputSlice.actions;
export default messageInputSlice.reducer;