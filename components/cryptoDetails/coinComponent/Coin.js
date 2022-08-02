import React from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { getDetail } from '../../../store/Slice';
import StylesCryptoDetails from "../../../styles/CryptoDetails.module.scss";


const Coin = () => {
    const details = useSelector(getDetail);

    return (
        <>
            <div>{details.image?.large && (<Image src={details.image?.large} height={50} width={50} alt={details.id}/>)}</div>
            <div>{details.name}</div>
            <div className={StylesCryptoDetails.upperCase}>{details.symbol}</div>
        </>
    )
}

export default Coin;