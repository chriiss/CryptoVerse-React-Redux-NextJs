import React from 'react';
import { useSelector } from 'react-redux';
import { getDetail } from '../../../store/Slice';
import dataJson from "../../../data/Data.json";



const CoinInfo = () => {
    const details = useSelector(getDetail);
    const dataCryptoDetails = dataJson.cryptoDetailsComponent;

    return (
        <>
            <div>{dataCryptoDetails.coin_info.total_market_cap}: {dataJson.usd}{details.market_data?.market_cap.usd}</div>
            <div>{dataCryptoDetails.coin_info.circulating_supply}: {details.market_data?.circulating_supply}</div>
            <div>{dataCryptoDetails.coin_info.trading_vol_24h}: {dataJson.usd}{details.market_data?.total_volume.usd}</div>
            <div>{dataCryptoDetails.coin_info.total_supply}: {details.market_data?.total_supply}</div>
            <div>{dataCryptoDetails.coin_info.diluted_valuation}: {dataJson.usd}{details.market_data?.fully_diluted_valuation.usd}</div>
            <div>{dataCryptoDetails.coin_info.max_supply}: {details.market_data?.max_supply}</div>
        </>
    )
}

export default CoinInfo;