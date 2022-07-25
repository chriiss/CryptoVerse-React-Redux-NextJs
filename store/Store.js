import {configureStore} from '@reduxjs/toolkit';
import cryptosReducer from './Slice';

export const store = configureStore({
    reducer: {
        cryptos: cryptosReducer,
        page: cryptosReducer,
        isFetching: cryptosReducer,
        search: cryptosReducer,
        suggestion: cryptosReducer,
        fav: cryptosReducer,
        history: cryptosReducer,
        detail: cryptosReducer,
        header: cryptosReducer,
        isButtonTopVisible: cryptosReducer,
        isVisibleHistory: cryptosReducer,
    }
})