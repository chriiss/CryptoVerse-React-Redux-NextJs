import React from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { getAllCryptos, getSearch } from '../store/slice';

const CryptoList = () => {
    const cryptoApi = useSelector(getAllCryptos);
    const query = useSelector(getSearch);
    const cryptoResult = cryptoApi.filter((data)=>
        data.name.toLowerCase().includes(query.toLowerCase()) ||
        data.symbol.toLowerCase().includes(query.toLowerCase())
    )

    return(
        <div>
            {
            cryptoResult.map((data, index) => (
                <div key={index}>
                    <Image src={data.image} width={25} height={25} alt="crypto_icon"/>
                    {data.name}
                    {data.symbol}
                </div>
            ))
            }
        </div>
    )
}

export default CryptoList;