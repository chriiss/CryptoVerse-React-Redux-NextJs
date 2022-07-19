import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cryptoHeaderData } from '../../pages/api/CryptoApi';
import { addHeader, getHeader } from '../../store/Slice';
import UseFormatCount from '../../hooks/UseFormatCount';
import dataJson from "../../data/Data.json";
import Styles from '../../styles/Home.module.scss';

const Header = () => {
    const header = useSelector(getHeader);
    const dispatch = useDispatch();

    const getCryptoHeaderData = async () => {
        await cryptoHeaderData.then((result) => dispatch(addHeader(result.data.data)));
    }

    useEffect(() => {
        getCryptoHeaderData();
    })

    return(
        <div>
            {UseFormatCount(header.active_cryptocurrencies)}
            {header.markets}
            {UseFormatCount(header.total_market_cap?.usd)}
            {UseFormatCount(header.total_volume?.usd)}
            <span className={header.market_cap_change_percentage_24h_usd <= 0 ? Styles.red : Styles.green}>{Math.round(header.market_cap_change_percentage_24h_usd * 100) / 100 }{dataJson.percent}</span>
            {Math.round(header.market_cap_percentage?.btc * 100) / 100}{dataJson.percent}
            {Math.round(header.market_cap_percentage?.eth * 100) / 100}{dataJson.percent}
            {Math.round(header.market_cap_percentage?.usdt * 100) / 100}{dataJson.percent}
        </div>
    )
}


export default Header;