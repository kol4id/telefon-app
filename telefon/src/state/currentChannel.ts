import { createSlice } from "@reduxjs/toolkit";
import { IChannel } from "../content/interfaces/IChannel";

interface IChannelState {
    isPending: boolean;
    channel: IChannel;
};

const initialState: IChannelState = {
    isPending: true,
    channel: {id: NaN, title: '', content: '', messages: []},
}

const currentChannelSlice = createSlice({
    name: 'currentChannel',
    initialState,
    reducers: {
        SetCurrentChannelData(state, action){
            state.channel = action.payload;
        },
        SetCurrentChannelDataPending(state, action){
            state.isPending = action.payload;
        }
    }
})

export const {SetCurrentChannelData, SetCurrentChannelDataPending} = currentChannelSlice.actions;
export default currentChannelSlice.reducer;