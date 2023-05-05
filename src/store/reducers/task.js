import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialValue = [];

const taskSlice = createSlice({
    name: "myInput",
    initialState: initialValue,
    reducers: {
        addTodo: (state, { payload }) => {
            if (!payload.title) return;
            return [...state, { id: uuid(), ...payload, fav: false }];
        },

        changeFav: (state, { payload }) => {
            state.map(item => {
                return item.id === payload ? item.fav = !item.fav : item;
            });
        },

        delItem: (state, { payload }) => {
            const index = state.findIndex(item => item.id === payload);
            return [...state.slice(0, index), ...state.slice(index + 1)];
        },
    },
});

export const { addTodo, changeFav, delItem } = taskSlice.actions;
export default taskSlice.reducer;
