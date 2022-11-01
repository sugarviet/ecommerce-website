import { configureStore } from '@reduxjs/toolkit';
import homeReducer from '../features/Home'
import allReducer from '../features/All'

export const store = configureStore({
    reducer: {
        home : homeReducer,
        all: allReducer
    }
})