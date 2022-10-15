import { configureStore, createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'hot-news',
    initialState: {
        articlesNum: 0,
        articles : []
    },
    reducers:{
        
    }
})

const store = configureStore({
    
})

export default store;

export const actions = slice.actions;