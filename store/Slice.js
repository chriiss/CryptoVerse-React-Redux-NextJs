import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    cryptos: [],
    search: "",
    suggestion: null,
    fav: []
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
        }
    }
})




export const { addCryptos, addSearch, addSuggestion, addFav } = cryptoSlice.actions;
export const getAllCryptos = (state) => state.cryptos.cryptos;
export const getSearch = (state) => state.search.search;
export const getSuggestion = (state) => state.suggestion.suggestion;
export const getFav = (state) => state.fav.fav;
export default cryptoSlice.reducer;