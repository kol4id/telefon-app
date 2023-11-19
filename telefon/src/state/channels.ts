import { createSlice } from "@reduxjs/toolkit";
import { IChannelState } from "../content/interfaces/IChannel";

interface IChannelPending{
    isPendind: boolean;
}


const initialState: IChannelState & IChannelPending = {
    channelSelected: -1,
    channels: [],
    isPendind: true,
};

const channelSlice = createSlice({
    name: 'channelsList',
    initialState,
    reducers: {
        SetChannels(state, action){
            state.channels = action.payload;
        },
        SetChannelSelected(state, action){
            state.channelSelected = action.payload;
        },
        SetDataPending(state, action){
            state.isPendind = action.payload;
        }  
    } 
})

export const {SetChannels, SetChannelSelected, SetDataPending} = channelSlice.actions;
export default channelSlice.reducer;