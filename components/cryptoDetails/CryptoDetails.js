import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import UseFormatCount from '../../hooks/UseFormatCount';
import { getDetail } from '../../store/Slice';
import dataJson from "../../data/Data.json";

const CryptoDetails = () => {
    const details = useSelector(getDetail);

    return (
        <div>
            <Link href="/">back</Link>
            {details.image?.large && (<Image src={details.image?.large} height={25} width={25} alt={details.id}/>)}
            {details.market_cap_rank}<br></br>
            {details.name}<br></br>
            {details.symbol}<br></br>
            {dataJson.usd}{UseFormatCount(details.market_data?.market_cap.usd)}<br></br>
            {dataJson.usd}{UseFormatCount(details.market_data?.fully_diluted_valuation.usd)}<br></br>
            {dataJson.usd}{UseFormatCount(details.market_data?.total_volume.usd)}<br></br>
            {dataJson.usd}{details.market_data?.high_24h.usd}<br></br>
            {dataJson.usd}{details.market_data?.low_24h.usd}<br></br>
            {details.market_data?.price_change_percentage_24h}{dataJson.percent}<br></br>
            {details.market_data?.price_change_percentage_7d}{dataJson.percent}<br></br>
            {details.market_data?.price_change_percentage_14d}{dataJson.percent}<br></br>
            {details.market_data?.price_change_percentage_30d}{dataJson.percent}<br></br>
            {details.market_data?.price_change_percentage_60d}{dataJson.percent}<br></br>
            {details.market_data?.price_change_percentage_200d}{dataJson.percent}<br></br>
            {details.market_data?.price_change_percentage_1y}{dataJson.percent}<br></br>
            {details.market_data?.total_supply}<br></br>
            {details.market_data?.max_supply}<br></br>
            {details.market_data?.circulating_supply}<br></br>
            {details.community_data?.twitter_followers}<br></br>
            {details.community_data?.reddit_subscribers}<br></br>
            {details.market_data?.ath.usd} {details.market_data?.ath_change_percentage.usd}{dataJson.percent}<br></br>
            {details.market_data?.atl.usd} {details.market_data?.atl_change_percentage.usd}{dataJson.percent}<br></br>
            {details.description?.en}<br></br>

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
        </div>
    )
}


export default CryptoDetails;