import {configureStore} from '@reduxjs/toolkit';
import cryptosReducer from './slice';

export const store = configureStore({
    reducer: {
        cryptos: cryptosReducer,
        search: cryptosReducer,
        suggestion: cryptosReducer
    }
})