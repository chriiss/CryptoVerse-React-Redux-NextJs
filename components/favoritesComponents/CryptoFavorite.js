import React from 'react';
import { useSelector } from "react-redux";
import Image from 'next/image';
import dataJson from "../../data/Data.json";
import { getFav } from '../../store/Slice';
import Styles from '../../styles/Home.module.scss'

const CryptoFavorite = (props) => {
    const FavoriteComponent = props.favoritesComponent;
	const favorite = useSelector(getFav);

    return(
        <div>
            {favorite.map((data, index) => (
                <div key={index}>
                    { data.image && (<Image src={data.image} width={25} height={25} alt="crypto_icon"/>)}
                    {data.market_cap_rank}
                    {data.name}
                    {data.symbol}
                    {dataJson.usd}{data.current_price}
                    <span className={data.price_change_percentage_24h <= 0 ? Styles.red : Styles.green}>{data.price_change_percentage_24h?.toFixed(2)}{dataJson.percent}</span>
                    {dataJson.usd}{data.ath}
                    <button type="button" role="button" onClick={() => props.handleFavoritesClick(data)}><FavoriteComponent /></button>
                </div>
            ))}
        </div>
    )
}

export default CryptoFavorite;