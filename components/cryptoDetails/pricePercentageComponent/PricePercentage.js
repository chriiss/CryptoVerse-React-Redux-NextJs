import React from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { getDetail } from '../../../store/Slice';
import UseShortNumber from '../../../hooks/UseShortNumber';
import dataJson from "../../../data/Data.json";
import StylesCryptoDetails from "../../../styles/CryptoDetails.module.scss";



const PricePercentage = () => {
    const details = useSelector(getDetail);
    const dataCryptoDetails = dataJson.cryptoDetailsComponent;

    return (
        <>
           <div>
                <label className={StylesCryptoDetails.dFlex} htmlFor={dataCryptoDetails.coin_percentage.twentyFour}>{dataCryptoDetails.coin_percentage.twentyFour}</label>
                <div name={dataCryptoDetails.coin_percentage.twentyFour} className={details.market_data?.price_change_percentage_24h <= 0 ? StylesCryptoDetails.red : StylesCryptoDetails.green}>
                    {UseShortNumber(details.market_data?.price_change_percentage_24h)}{dataJson.percent}</div>
                </div>

            <div>
                <label className={StylesCryptoDetails.dFlex} htmlFor={dataCryptoDetails.coin_percentage.seven}>{dataCryptoDetails.coin_percentage.seven}</label>
                <div name={dataCryptoDetails.coin_percentage.seven} className={details.market_data?.price_change_percentage_7d <= 0 ? StylesCryptoDetails.red : StylesCryptoDetails.green}>
                    {UseShortNumber(details.market_data?.price_change_percentage_7d)}{dataJson.percent}
                </div>
            </div>

            <div>
                <label className={StylesCryptoDetails.dFlex} htmlFor={dataCryptoDetails.coin_percentage.fourteen}>{dataCryptoDetails.coin_percentage.fourteen}</label>
                <div name={dataCryptoDetails.coin_percentage.fourteen} className={details.market_data?.price_change_percentage_14d <= 0 ? StylesCryptoDetails.red : StylesCryptoDetails.green}>
                    {UseShortNumber(details.market_data?.price_change_percentage_14d)}{dataJson.percent}
                </div>
            </div>

            <div>
                <label className={StylesCryptoDetails.dFlex} htmlFor={dataCryptoDetails.coin_percentage.thirty}>{dataCryptoDetails.coin_percentage.thirty}</label>
                <div name={dataCryptoDetails.coin_percentage.thirty} className={details.market_data?.price_change_percentage_30d <= 0 ? StylesCryptoDetails.red : StylesCryptoDetails.green}>
                    {UseShortNumber(details.market_data?.price_change_percentage_30d)}{dataJson.percent}
                </div>
            </div>

            <div>
                <label className={StylesCryptoDetails.dFlex} htmlFor={dataCryptoDetails.coin_percentage.sixty}>{dataCryptoDetails.coin_percentage.sixty}</label>
                 <div name={dataCryptoDetails.coin_percentage.sixty} className={details.market_data?.price_change_percentage_60d <= 0 ? StylesCryptoDetails.red : StylesCryptoDetails.green}>
                    {UseShortNumber(details.market_data?.price_change_percentage_60d)}{dataJson.percent}
                </div>
            </div>

            <div>
                <label className={StylesCryptoDetails.dFlex} htmlFor={dataCryptoDetails.coin_percentage.twoHundred}>{dataCryptoDetails.coin_percentage.twoHundred}</label>
                <div name={dataCryptoDetails.coin_percentage.twoHundred} className={details.market_data?.price_change_percentage_200d <= 0 ? StylesCryptoDetails.red : StylesCryptoDetails.green}>
                    {UseShortNumber(details.market_data?.price_change_percentage_200d)}{dataJson.percent}
                </div>
            </div>

            <div>
                <label className={StylesCryptoDetails.dFlex} htmlFor={dataCryptoDetails.coin_percentage.one}>{dataCryptoDetails.coin_percentage.one}</label>
                <div name={dataCryptoDetails.coin_percentage.one} className={details.market_data?.price_change_percentage_1y <= 0 ? StylesCryptoDetails.red : StylesCryptoDetails.green}>
                    {UseShortNumber(details.market_data?.price_change_percentage_1y)}{dataJson.percent}
                 </div>
            </div>
        </>
    )
}

export default PricePercentage;