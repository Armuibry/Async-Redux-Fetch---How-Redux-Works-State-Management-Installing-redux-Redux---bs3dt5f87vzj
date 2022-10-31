import { configureStore, createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'hot-news',
    initialState: {
        articlesNum: 0,
        articles : [],
    },
    reducers:{
         setnews:(state,action)=>{
            state.articles = [...action.payload]
            state.articlesNum = action.payload.length;
         }
    }
})

const store = configureStore({
    reducer : { news: slice.reducer}
})

export default store;

export const actions = slice.actions;