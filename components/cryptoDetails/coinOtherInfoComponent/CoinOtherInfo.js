import React from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { getDetail } from '../../../store/Slice';
import UseDateFormat from '../../../hooks/UseDateFormat';
import UseShortNumber from '../../../hooks/UseShortNumber';
import dataJson from "../../../data/Data.json";
import TwitterIcon from "../../../assets/twitter-icon.svg";
import RedditIcon from "../../../assets/reddit-icon.svg";
import StylesCryptoDetails from "../../../styles/CryptoDetails.module.scss";



const CoinOtherInfo = () => {
    const details = useSelector(getDetail);
    const dataCryptoDetails = dataJson.cryptoDetailsComponent;

    return (
        <>
           <div className={StylesCryptoDetails.otherInfoBloc_img}>
                <Image src={TwitterIcon} width={30} height={30} alt="icon"/>&nbsp;
                    {details.community_data?.twitter_followers} {dataJson.follow}
            </div>
            <div>
                <span className={StylesCryptoDetails.otherInfoBloc_text}>
                    {dataCryptoDetails.coin_max_min.ath}: {dataJson.usd}{details.market_data?.ath.usd}
                </span>
                <span className={details.market_data?.ath_change_percentage.usd <= 0 ? StylesCryptoDetails.red : StylesCryptoDetails.green}>
                    {UseShortNumber(details.market_data?.ath_change_percentage.usd)}{dataJson.percent}
                </span>
                <div className={StylesCryptoDetails.otherInfoBloc_borderNone}>
                    {UseDateFormat(details.market_data?.ath_date.usd)}{""}
                </div>
            </div>
            <div className={StylesCryptoDetails.otherInfoBloc_img}>
                <Image src={RedditIcon} width={30} height={30} alt="icon"/>&nbsp;
                {details.community_data?.reddit_subscribers} {dataJson.follow}
            </div>
            <div>
                <span className={StylesCryptoDetails.otherInfoBloc_text}>
                    {dataCryptoDetails.coin_max_min.atl}: {dataJson.usd}{details.market_data?.atl.usd}
                </span>
                <span className={details.market_data?.atl_change_percentage.usd <= 0 ? StylesCryptoDetails.red : StylesCryptoDetails.green}>
                    {UseShortNumber(details.market_data?.atl_change_percentage.usd)}{dataJson.percent}
                </span>
                <div className={StylesCryptoDetails.otherInfoBloc_borderNone}>
                    {UseDateFormat(details.market_data?.atl_date.usd)}{""}
                </div>
            </div>
        </>
    )
}

export default CoinOtherInfo;