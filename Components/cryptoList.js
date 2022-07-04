import React from 'react';
import { useSelector } from 'react-redux';
import { getAllCryptos } from '../store/slice';

const CryptoList = () => {
    const cryptoApi = useSelector(getAllCryptos);

    return(
        cryptoApi.map((data, index) => (
            <div key={index}>
                {data.name}
            </div>
        ))
    )
}

export default CryptoList;