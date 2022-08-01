import React from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import UseFormatCount from '../../hooks/UseFormatCount';
import UseShortNumber from '../../hooks/UseShortNumber';
import useTagDelete from '../../hooks/useTagDelete';
import { getDetail } from '../../store/Slice';
import dataJson from "../../data/Data.json";
import Back from './backComponent/back';
import StylesCryptoDetails from "../../styles/CryptoDetails.module.scss";

const CryptoDetails = () => {
    const details = useSelector(getDetail);
    const dataCryptoDetails = dataJson.cryptoDetailsComponent;

    return (
        <>
            <header className={StylesCryptoDetails.header}>
                <Back />
            </header>
            <section className={StylesCryptoDetails.rankBloc}>
                {dataCryptoDetails.rank_cap.rank} {dataCryptoDetails.rank_cap.hashtag} {details.market_cap_rank}
            </section>
            <section className={`${StylesCryptoDetails.dFlex} ${StylesCryptoDetails.coinBloc}`}>
                <div>{details.image?.large && (<Image src={details.image?.large} height={50} width={50} alt={details.id}/>)}</div>
                <div>{details.name}</div>
                <div className={StylesCryptoDetails.upperCase}>{details.symbol}</div>
            </section>
            <section className={`${StylesCryptoDetails.dFlex} ${StylesCryptoDetails.marketDataBloc}`}>
                <div className={StylesCryptoDetails.red}>{dataJson.usd}{details.market_data?.low_24h.usd}</div>
                <div>{dataCryptoDetails.price_range.twentyFour_range}</div>
                <div className={StylesCryptoDetails.green}>{dataJson.usd}{details.market_data?.high_24h.usd}</div>
            </section>
            <section className={StylesCryptoDetails.coinInfo}>
                <div>{dataCryptoDetails.coin_info.total_market_cap}: {dataJson.usd}{UseFormatCount(details.market_data?.market_cap.usd)}</div>
                <div>{dataCryptoDetails.coin_info.circulating_supply}: {details.market_data?.circulating_supply}</div>
                <div>{dataCryptoDetails.coin_info.trading_vol_24h}: {dataJson.usd}{UseFormatCount(details.market_data?.total_volume.usd)}</div>
                <div>{dataCryptoDetails.coin_info.total_supply}: {details.market_data?.total_supply}</div>
                <div>{dataCryptoDetails.coin_info.diluted_valuation}: {dataJson.usd}{UseFormatCount(details.market_data?.fully_diluted_valuation.usd)}</div>
                <div>{dataCryptoDetails.coin_info.max_supply}: {details.market_data?.max_supply}</div>
            </section>
            <section className={`${StylesCryptoDetails.dFlex} ${StylesCryptoDetails.pricePercentageBloc}`}>
                <div>
                    <label className={StylesCryptoDetails.dFlex} htmlFor={dataCryptoDetails.coin_percentage.twentyFour}>{dataCryptoDetails.coin_percentage.twentyFour}</label>
                    <div name={dataCryptoDetails.coin_percentage.twentyFour} className={details.market_data?.price_change_percentage_24h <= 0 ? StylesCryptoDetails.red : StylesCryptoDetails.green}>{UseShortNumber(details.market_data?.price_change_percentage_24h)}{dataJson.percent}</div>
                </div>

                <div>
                    <label className={StylesCryptoDetails.dFlex} htmlFor={dataCryptoDetails.coin_percentage.seven}>{dataCryptoDetails.coin_percentage.seven}</label>
                    <div name={dataCryptoDetails.coin_percentage.seven} className={details.market_data?.price_change_percentage_7d <= 0 ? StylesCryptoDetails.red : StylesCryptoDetails.green}>{UseShortNumber(details.market_data?.price_change_percentage_7d)}{dataJson.percent}</div>
                </div>

                <div>
                    <label className={StylesCryptoDetails.dFlex} htmlFor={dataCryptoDetails.coin_percentage.fourteen}>{dataCryptoDetails.coin_percentage.fourteen}</label>
                    <div name={dataCryptoDetails.coin_percentage.fourteen} className={details.market_data?.price_change_percentage_14d <= 0 ? StylesCryptoDetails.red : StylesCryptoDetails.green}>{UseShortNumber(details.market_data?.price_change_percentage_14d)}{dataJson.percent}</div>
                </div>

                <div>
                    <label className={StylesCryptoDetails.dFlex} htmlFor={dataCryptoDetails.coin_percentage.thirty}>{dataCryptoDetails.coin_percentage.thirty}</label>
                    <div name={dataCryptoDetails.coin_percentage.thirty} className={details.market_data?.price_change_percentage_30d <= 0 ? StylesCryptoDetails.red : StylesCryptoDetails.green}>{UseShortNumber(details.market_data?.price_change_percentage_30d)}{dataJson.percent}</div>
                </div>

                <div>
                    <label className={StylesCryptoDetails.dFlex} htmlFor={dataCryptoDetails.coin_percentage.sixty}>{dataCryptoDetails.coin_percentage.sixty}</label>
                    <div name={dataCryptoDetails.coin_percentage.sixty} className={details.market_data?.price_change_percentage_60d <= 0 ? StylesCryptoDetails.red : StylesCryptoDetails.green}>{UseShortNumber(details.market_data?.price_change_percentage_60d)}{dataJson.percent}</div>
                </div>

                <div>
                    <label className={StylesCryptoDetails.dFlex} htmlFor={dataCryptoDetails.coin_percentage.twoHundred}>{dataCryptoDetails.coin_percentage.twoHundred}</label>
                    <div name={dataCryptoDetails.coin_percentage.twoHundred} className={details.market_data?.price_change_percentage_200d <= 0 ? StylesCryptoDetails.red : StylesCryptoDetails.green}>{UseShortNumber(details.market_data?.price_change_percentage_200d)}{dataJson.percent}</div>
                </div>

                <div>
                    <label className={StylesCryptoDetails.dFlex} htmlFor={dataCryptoDetails.coin_percentage.one}>{dataCryptoDetails.coin_percentage.one}</label>
                    <div name={dataCryptoDetails.coin_percentage.one} className={details.market_data?.price_change_percentage_1y <= 0 ? StylesCryptoDetails.red : StylesCryptoDetails.green}>{UseShortNumber(details.market_data?.price_change_percentage_1y)}{dataJson.percent}</div>
                </div>
            </section><br/>
            <section>
                {details.community_data?.twitter_followers}
                {details.community_data?.reddit_subscribers}
                {details.market_data?.ath.usd} {details.market_data?.ath_change_percentage.usd}{dataJson.percent}
                {details.market_data?.atl.usd} {details.market_data?.atl_change_percentage.usd}{dataJson.percent}
            </section>
            <section>
                {useTagDelete(details.description?.en)}
            </section>

            {details.tickers?.map((data, i) => {
                return (
                    <div key={i}>
                        {data.market.name}
                        {data.base}
                        {data.target}
                        {data.last}
                        {data.volume}
                        {data.trust_score}
                    </div>
                )
            })

            }
        </>
    )
}


export default CryptoDetails;