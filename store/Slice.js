import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    cryptos: [],
    search: "",
    suggestion: null,
    fav: [],
    history: [],
    detail: {},
    header: {}
}

const cryptoSlice = createSlice({
    name: 'crypto',
    initialState,
    reducers: {
        addCryptos(state, action){
            state.cryptos = action.payload;
        },
        addSearch(state, action) {
            state.search = action.payload;
        },
        addSuggestion(state, action) {
            state.suggestion = action.payload;
        },
        addFav(state, action) {
            state.fav = action.payload;
        },
        addHistory(state, action) {
            state.history = action.payload;
        },
        addDetail(state, action) {
            state.detail = action.payload;
        },
        addHeader(state, action) {
            state.header = action.payload;
        }
    }
})




export const { addCryptos, addSearch, addSuggestion, addFav, addHistory, addDetail, addHeader } = cryptoSlice.actions;
export const getAllCryptos = (state) => state.cryptos.cryptos;
export const getSearch = (state) => state.search.search;
export const getSuggestion = (state) => state.suggestion.suggestion;
export const getFav = (state) => state.fav.fav;
export const getHistory = (state) => state.history.history;
export const getDetail = (state) => state.detail.detail;
export const getHeader = (state) => state.header.header;
export default cryptoSlice.reducer;