'use client'

import todoSlice from "@/app/Components/Todolist/Redux/todoSlice";
import addToFavSlice from "./addToFavSlice";

const { configureStore } = require("@reduxjs/toolkit");
// const { default: addToFavSlice } = require("./addToFavSlice");

const store = configureStore({
    reducer: {
        favList: addToFavSlice,
        todolist: todoSlice,
    }
})
export default store;