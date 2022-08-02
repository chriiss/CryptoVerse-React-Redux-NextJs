import React from 'react';
import { useSelector } from 'react-redux';
import { getDetail } from '../../../store/Slice';
import dataJson from "../../../data/Data.json";

const Rank = () => {
    const details = useSelector(getDetail);
    const dataCryptoDetails = dataJson.cryptoDetailsComponent;

    return (
        <>
            {dataCryptoDetails.rank_cap.rank} {dataCryptoDetails.rank_cap.hashtag} {details.market_cap_rank}
        </>
    )
}

export default Rank;