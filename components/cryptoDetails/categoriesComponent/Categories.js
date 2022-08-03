import React from 'react';
import { useSelector } from 'react-redux';
import { getDetail } from '../../../store/Slice';
import dataJson from "../../../data/Data.json";

const Categories = () => {
    const details = useSelector(getDetail);
    const dataCryptoDetails = dataJson.cryptoDetailsComponent;

    return (
        <>
            {dataCryptoDetails.categories.categories} {`${dataCryptoDetails.rank_cap.hashtag}${details.categories}`}
        </>
    )
}

export default Categories;