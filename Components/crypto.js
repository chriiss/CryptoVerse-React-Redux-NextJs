import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addCryptos } from '/store/slice';
import  cryptoApi  from '../pages/api/cryptoApi';
import CryptoList from './cryptoList';

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
            <CryptoList/>
        </div>
    )
}

export default Crypto;