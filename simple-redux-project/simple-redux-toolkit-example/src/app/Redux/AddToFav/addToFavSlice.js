'use client'
import { createSlice } from '@reduxjs/toolkit'

const addToFavSlice = createSlice({
    name: 'FavPost',
    initialState: [],
    // ! all method here
    reducers: {
        add(state, action) {
            state.push(action.payload);
        },

        remove(state, action) {
            return state.filter(item => item.id !== action.payload);
        }
    }
})

export const { add, remove } = addToFavSlice.actions;
export default addToFavSlice.reducer;