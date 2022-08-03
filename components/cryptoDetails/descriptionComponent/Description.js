import React from 'react';
import { useSelector } from 'react-redux';
import useTagDelete from '../../../hooks/useTagDelete';
import { getDetail } from '../../../store/Slice';
import dataJson from '../../../data/Data.json';


const Description = () => {
    const details = useSelector(getDetail);
    const dataCryptoDetails = dataJson.cryptoDetailsComponent;
    return(
        <>
            <h4>{details.name} {dataCryptoDetails.description.description}</h4>
            {useTagDelete(details.description?.en)}
        </>
    )
}

export default Description;