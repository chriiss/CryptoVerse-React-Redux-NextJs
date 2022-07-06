import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addCryptos } from '/store/slice';
import  cryptoApi  from '../pages/api/cryptoApi';
import CryptoList from './cryptoList';
import FilterList from './filterList';
import SearchBox from './searchBox';


const Crypto = () => {
    const dispatch = useDispatch();

    const getCryptoApi = async () => {
        await cryptoApi
        .then(result => {
            dispatch(addCryptos(result.data));
        });
    }

    useEffect(() => {
        getCryptoApi();
    }, [])



    return(
        <div>
            <SearchBox />
            <FilterList />
            <CryptoList/>
        </div>
    )
}

export default Crypto;