import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addCryptos } from '/store/slice';
import  cryptoData  from '../pages/api/CryptoApi';
import CryptoList from './CryptoList';
import FilterList from './FilterList';
import SearchBox from './SearchBox';


const Crypto = () => {
    const dispatch = useDispatch();

    const getCryptoApi = async () => {
        await cryptoData
        .then(result => {
            dispatch(addCryptos(result.data));
        });
    }

    useEffect(() => {
        getCryptoApi();
    })



    return(
        <div>
            <SearchBox />
            <FilterList />
            <CryptoList/>
        </div>
    )
}

export default Crypto;