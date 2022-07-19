import {configureStore} from '@reduxjs/toolkit';
import cryptosReducer from './Slice';

export const store = configureStore({
    reducer: {
        cryptos: cryptosReducer,
        search: cryptosReducer,
        suggestion: cryptosReducer,
        fav: cryptosReducer,
        history: cryptosReducer,
        detail: cryptosReducer,
        header: cryptosReducer
    }
})