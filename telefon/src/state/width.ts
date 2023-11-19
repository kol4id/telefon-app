import { createSlice } from "@reduxjs/toolkit";

const SEARCH_RESIZE_OFFSET: number = 110;
const CHANNEL_RESIZE_OFFSET: number = 27;
const WORDWRAP_RESIZE_OFFSET: number = 100;

interface Width {
    leftWinWidth: number;
    searchWidth: number;
    channelWidth: number;
    channelWrapWidth: number;
};

const initialState: Width = {
    leftWinWidth: 300,
    searchWidth: 190,
    channelWidth: 273,
    channelWrapWidth: 200,
}

const widthSlice = createSlice({
    name: 'width',
    initialState,
    reducers: {
        resize(state, action){
            state.leftWinWidth = action.payload;
            state.searchWidth = action.payload - SEARCH_RESIZE_OFFSET;
            state.channelWidth = action.payload - CHANNEL_RESIZE_OFFSET;
            state.channelWrapWidth = action.payload - WORDWRAP_RESIZE_OFFSET;
        }
    }
})

export const {resize} = widthSlice.actions;
export default widthSlice.reducer;