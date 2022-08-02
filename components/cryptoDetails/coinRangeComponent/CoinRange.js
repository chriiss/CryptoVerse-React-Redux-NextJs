import React from 'react';
import { useSelector } from 'react-redux';
import { getDetail } from '../../../store/Slice';
import dataJson from "../../../data/Data.json";
import StylesCryptoDetails from "../../../styles/CryptoDetails.module.scss";



const CoinRange = () => {
    const details = useSelector(getDetail);
    const dataCryptoDetails = dataJson.cryptoDetailsComponent;

    return (
        <>
           <div className={StylesCryptoDetails.red}>{dataJson.usd}{details.market_data?.low_24h.usd}</div>
            <div>{dataCryptoDetails.price_range.twentyFour_range}</div>
            <div className={StylesCryptoDetails.green}>{dataJson.usd}{details.market_data?.high_24h.usd}</div>
        </>
    )
}

export default CoinRange;