import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cryptoHeaderData } from '../../pages/api/CryptoApi';
import { addHeader, getHeader } from '../../store/Slice';
import UseFormatCount from '../../hooks/UseFormatCount';
import UseShortNumber from '../../hooks/UseShortNumber';
import dataJson from "../../data/Data.json";
import Styles from '../../styles/Home.module.scss';

const Header = () => {
    const header = useSelector(getHeader);
    const dispatch = useDispatch();
    const headerComponent = dataJson.headerComponent;

    const getCryptoHeaderData = async () => {
        await cryptoHeaderData.then((result) => dispatch(addHeader(result.data.data)));
    }

    useEffect(() => {
        getCryptoHeaderData();
    })

    return(
        <div className= {`${Styles.header} ${Styles.dFlex}`}>
            <div>
                <label htmlFor={headerComponent.coins}>{headerComponent.coins}</label>
                <div name={headerComponent.coins}>{UseFormatCount(header.active_cryptocurrencies)}</div>
            </div>

            <div>
                <label htmlFor={headerComponent.total_market_cap}>{headerComponent.total_market_cap}</label>
                <div name={headerComponent.total_market_cap}>{dataJson.usd}{UseFormatCount(header.total_market_cap?.usd)}</div>
            </div>

            <div>
                <label htmlFor={headerComponent.total_vol_24}>{headerComponent.total_vol_24}</label>
                <div className={`${Styles.dFlex} ${Styles.header_vol}`}>
                    <div name={headerComponent.total_vol_24}>{dataJson.usd}{UseFormatCount(header.total_volume?.usd)}</div>
                    <div className={header.market_cap_change_percentage_24h_usd <= 0 ? Styles.red : Styles.green}>{UseShortNumber(header.market_cap_change_percentage_24h_usd)}{dataJson.percent}</div>
                </div>
            </div>

            <div>
                <label htmlFor={headerComponent.btc}>{headerComponent.btc}</label>
                <div name={headerComponent.btc}>{UseShortNumber(header.market_cap_percentage?.btc)}{dataJson.percent}</div>
            </div>

            <div>
                <label htmlFor={headerComponent.eth}>{headerComponent.eth}</label>
                <div name={headerComponent.eth}>{UseShortNumber(header.market_cap_percentage?.eth)}{dataJson.percent}</div>
            </div>

            <div>
                <label htmlFor={headerComponent.usdt}>{headerComponent.usdt}</label>
                <div name={headerComponent.usdt}>{UseShortNumber(header.market_cap_percentage?.usdt)}{dataJson.percent}</div>
            </div>
        </div>
    )
}


export default Header;