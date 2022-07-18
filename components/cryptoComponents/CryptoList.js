import React from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import UseFormatCount from '../../hooks/UseFormatCount';
import { getAllCryptos, getSearch } from '../../store/Slice';
import dataJson from "../../data/Data.json";
import Styles from '../../styles/Home.module.scss';

const CryptoList = (props) => {
    const cryptoApi = useSelector(getAllCryptos);
    const query = useSelector(getSearch);
    const cryptoResult = cryptoApi.filter((data)=>
        data.name.toLowerCase().includes(query.toLowerCase()) ||
        data.symbol.toLowerCase().includes(query.toLowerCase())
    )

    const FavoriteComponent = props.favoritesComponent;

    return(
        <div>
            <div>{cryptoResult.length} {dataJson.result}</div>
            {
            cryptoResult.map((data, index) => (
                <div key={index}>
                    { data.image && (<Image src={data.image} width={25} height={25} alt="crypto_icon"/>)}
                    {data.market_cap_rank}
                    {data.name}
                    {data.symbol}
                    {dataJson.usd}{data.current_price}
                    <span className={data.price_change_percentage_24h <= 0 ? Styles.red : Styles.green}>{data.price_change_percentage_24h?.toFixed(2)}{dataJson.percent}</span>
                    {dataJson.usd}{UseFormatCount(data.market_cap)}
                    {dataJson.usd}{UseFormatCount(data.total_volume)}
                    {dataJson.usd}{UseFormatCount(data.ath)}
                    <button type="button" role="button" onClick={() => props.handleFavoritesClick(data)}><FavoriteComponent /></button>
                    <div onClick={() =>  props.handleIdClick(data)}>More</div>
                </div>
            ))}
        </div>
    )
}

export default CryptoList;