import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    cryptos: [],
    search: "",
    suggestion: null,
    fav: [],
    history: [],
    detail: {},
    header: {},
    page: 1,
    isFetching: false,
    isButtonTopVisible: false,
    isVisibleHistory: false,
    isSticky: false,
}

const cryptoSlice = createSlice({
    name: 'crypto',
    initialState,
    reducers: {
        addCryptos(state, action){
            state.cryptos = action.payload;
        },
        addCryptosPage(state, action) {
            state.page = action.payload;
        },
        addCryptosFetching(state, action) {
            state.isFetching = action.payload;
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
        },
        addButtonTop(state, action) {
            state.isButtonTopVisible = action.payload;
        },
        addVisibleHistory(state, action) {
            state.isVisibleHistory = action.payload;
        },
        addSticky(state, action) {
            state.isSticky = action.payload;
        }
    }
})




export const { addCryptos, addCryptosPage, addCryptosFetching, addSearch, addSuggestion, addFav, addHistory, addDetail, addHeader, addButtonTop, addVisibleHistory, addSticky } = cryptoSlice.actions;
export const getAllCryptos = (state) => state.cryptos.cryptos;
export const getCryptosPage = (state) => state.page.page;
export const getCryptosFetching = (state) => state.isFetching.isFetching;
export const getSearch = (state) => state.search.search;
export const getSuggestion = (state) => state.suggestion.suggestion;
export const getFav = (state) => state.fav.fav;
export const getHistory = (state) => state.history.history;
export const getDetail = (state) => state.detail.detail;
export const getHeader = (state) => state.header.header;
export const getButtonTop = (state) => state.isButtonTopVisible.isButtonTopVisible;
export const getVisibleHistory = (state) => state.isVisibleHistory.isVisibleHistory;
export const getSticky = (state) => state.isSticky.isSticky;
export default cryptoSlice.reducer;