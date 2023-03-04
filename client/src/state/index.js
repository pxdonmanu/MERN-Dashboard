import { createSlice } from "@reduxjs/toolkit";

//This is the initial state of the global state
const initialState = {
    mode: "dark",
};

//What is a reducer? A reducer is a function that takes the current state and an action as arguments, and returns a new state result. In other words, (state, action) => newState.

//This function is used to create a slice of the global state and it is used to create a reducer that will be used to update the global state
export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        setMode: (state) => {
        state.mode = state.mode === "light" ? "dark" : "light";
        },
    },
});

//This export is used to export the actions that can be used to update the global state
export const { setMode } = globalSlice.actions;

export default globalSlice.reducer;