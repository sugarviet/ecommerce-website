import callAPI from '../utils/apiCaller';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
    name: 'home',
    initialState: {value: []},
    reducers:{

    },
    extraReducers:builder => {
        builder.addCase(fetchHomeData.pending, (state, action) => {
            console.log(action.payload);
        }).addCase(fetchHomeData.fulfilled, (state, action) => {
            state.value = action.payload
        })
    }
    
})

export const fetchHomeData = createAsyncThunk('home/fetchHomeData', async() => {
    const res = await callAPI('products','GET', null);

    return res.data;
})
export default homeSlice.reducer;