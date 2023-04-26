import { createSlice } from "@reduxjs/toolkit";

const initialValue = [];

const taskSlice = createSlice({
    name: "myInput",
    initialState: initialValue,
    reducers: {
        addTodo: (state, { payload }) => {
            if(!payload.title) return;
            return state = [...state, payload];
        },

        changeFav: (state, { payload }) => {
            state = state.map(item => {
                return item.id === payload
                    ? (item.fav = !item.fav)
                    : item;
            });
        },

        delItem: (state, { payload }) => {
            const index = state.findIndex(item => item.id === payload)
            return [...state.slice(0, index), ...state.slice(index + 1)]
        }
    },
});

export const { addTodo, changeFav, delItem } = taskSlice.actions;
export default taskSlice.reducer;
