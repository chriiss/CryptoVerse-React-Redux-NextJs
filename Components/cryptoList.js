import React from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { getAllCryptos, getSearch } from '../store/slice';
import dataJson from "../data/data.json";

const CryptoList = () => {
    const cryptoApi = useSelector(getAllCryptos);
    const query = useSelector(getSearch);
    const cryptoResult = cryptoApi.filter((data)=>
        data.name.toLowerCase().includes(query.toLowerCase()) ||
        data.symbol.toLowerCase().includes(query.toLowerCase())
    )

    return(
        <div>
            <div>{cryptoResult.length} {dataJson.result}</div>
            {
            cryptoResult.map((data, index) => (
                <div key={index}>
                    <Image src={data.image} width={25} height={25} alt="crypto_icon"/>
                    {data.market_cap_rank}
                    {data.name}
                    {data.symbol}
                    {dataJson.usd}{data.current_price}
                    {data.price_change_percentage_24h.toFixed(2)}{dataJson.percent}
                    {dataJson.usd}{data.market_cap}
                    {dataJson.usd}{data.total_volume}
                    {dataJson.usd}{data.ath}
                </div>
            ))}
        </div>
    )
}

export default CryptoList;