import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import UseFormatCount from '../../hooks/UseFormatCount';
import { addCryptos, getAllCryptos, addCryptosPage, getCryptosPage, getSearch, addCryptosFetching, getCryptosFetching } from '../../store/Slice';
import dataJson from "../../data/Data.json";
import Styles from '../../styles/Home.module.scss';

const CryptoList = (props) => {
    const cryptoApi = useSelector(getAllCryptos);
    const page = useSelector(getCryptosPage);
    const isFetching = useSelector(getCryptosFetching);
    const query = useSelector(getSearch);
    const cryptoResult = cryptoApi.filter((data)=>
        data.name.toLowerCase().includes(query.toLowerCase()) ||
        data.symbol.toLowerCase().includes(query.toLowerCase())
    )

    const FavoriteComponent = props.favoritesComponent;
    const dispatch = useDispatch();

    const getCryptoData = async () => {
        await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${page}&sparkline=false`).then((res) => {
            dispatch(addCryptos([...cryptoApi, ...res.data]));
            dispatch(addCryptosPage(page + 1));
            dispatch(addCryptosFetching(false));
        });
    }

    const isScrolling = () => {
        if (
          window.innerHeight + document.documentElement.scrollTop !==
          document.documentElement.offsetHeight
        ) {
          return;
        }
        dispatch(addCryptosFetching(true));
    };


    useEffect(() => {
        getCryptoData();
        window.addEventListener("scroll", isScrolling);
        return () => window.removeEventListener("scroll", isScrolling);
    }, []);

    useEffect(() => {
        if (isFetching) {
          getCryptoData();
        }
    }, [isFetching]);

    if(cryptoApi.length === 0) return(<div>Loading...</div>)


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