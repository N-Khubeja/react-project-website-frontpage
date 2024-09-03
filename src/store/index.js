import { combineReducers, configureStore } from "@reduxjs/toolkit";
import modeSlice from "./mode/mode.slice";

const rootReducers = combineReducers({
    mode : modeSlice
})
export const store = configureStore({
    reducer:rootReducers
})