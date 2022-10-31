import { configureStore, createSlice } from "@reduxjs/toolkit";


//creating slice with reducers
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


//store configration
const store = configureStore({
    reducer : { news: slice.reducer}
})

export default store;


//exporting slice actions to dispatch actions from other components
export const actions = slice.actions;