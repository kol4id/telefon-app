import { configureStore } from "@reduxjs/toolkit";
import channelSearch from "./channelSearch";
import width from "./width";
import messageInput from "./messageInput";
import cursorStyle from "./cursorStyle";
import channels from "./channels";
import currentChannel from "./currentChannel";

export const store = configureStore({
    reducer: {
        channelSearch: channelSearch,
        channelsList: channels,
        width: width,
        messageInput: messageInput,
        cursorStyle: cursorStyle,
        currentChannel: currentChannel,
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;