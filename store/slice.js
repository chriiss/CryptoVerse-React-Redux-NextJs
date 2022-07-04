import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    cryptos: []
}

const cryptoSlice = createSlice({
    name: 'crypto',
    initialState,
    reducers: {
        addCryptos(state, action){
            state.cryptos = action.payload;
        }
    }
})




export const { addCryptos } = cryptoSlice.actions;
export const getAllCryptos = (state) => state.cryptos.cryptos;
export default cryptoSlice.reducer;