import { configureStore } from "@reduxjs/toolkit";
import taskSlice from './reducers/task'

const store = configureStore({
    reducer: {
        task: taskSlice
    },
});
export default store;