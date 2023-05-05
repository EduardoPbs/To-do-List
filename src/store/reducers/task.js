import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialValue = [];

const taskSlice = createSlice({
    name: "myInput",
    initialState: initialValue,
    reducers: {
        addTodo: (state, { payload }) => {
            if (!payload.title) return;
            state.push({id: uuid(), ...payload, fav: false})
        },

        changeFav: (state, { payload }) => {
            state.map(item => item.id === payload ? item.fav = !item.fav : item);
        },

        delItem: (state, { payload }) => {
            const index = state.findIndex(item => item.id === payload);
            state.splice(index, 1);
        },

        changeItem:(state, {payload}) => {
            const index = state.findIndex(item => item.id === payload.id);
            Object.assign(state[index], payload.item);
        }
    },
});

export const { addTodo, changeFav, delItem, changeItem } = taskSlice.actions;
export default taskSlice.reducer;
