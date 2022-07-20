import React, { useEffect } from 'react';
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
    const MoreComponent = props.moreComponent;
    const dispatch = useDispatch();

    const getCryptoData = async () => {
        await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${page}&sparkline=false`).then((res) => {
            dispatch(addCryptos([...cryptoApi, ...res.data]));
            dispatch(addCryptosPage(page + 1));
            dispatch(addCryptosFetching(false));
        });
    }

    const isScrolling = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
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
            <div className={Styles.result}>{cryptoResult.length} {dataJson.result}</div>
            <div className={`${Styles.dFlex} ${Styles.tableHeader}`}>
                <div className={Styles.coin}>{dataJson.listHeader.coin}</div>
                <div>{dataJson.listHeader.price}</div>
            </div>
            {
            cryptoResult.map((data, index) => (
                <table className={Styles.table} key={index}>
                    <tbody>
                        <tr>
                            <td>
                                <div className={`${Styles.dFlex} ${Styles.firstRow}`}>
                                    <div>{data.image && (<Image src={data.image} width={40} height={40} alt="crypto_icon"/>)}</div>
                                    <div className={Styles.name}>{data.market_cap_rank}</div>
                                    <div>
                                        <div>{data.name}</div>
                                        <div className={Styles.upperCase}>{data.symbol}</div>
                                    </div>
                                </div>
                            </td>

                            <td>{dataJson.usd}{data.current_price}</td>

                            <td>
                                <div className={`${Styles.dFlex} ${Styles.flexColumn} ${Styles.line}`}>
                                    <span className={Styles.dFlex}>{dataJson.list.hvol}:&nbsp;
                                        <div className={data.price_change_percentage_24h <= 0 ? Styles.red : Styles.green}>{data.price_change_percentage_24h?.toFixed(2)}{dataJson.percent}
                                        </div>
                                    </span>
                                    <div>{dataJson.list.total_cap}: {dataJson.usd}{UseFormatCount(data.market_cap)}</div>
                                    <div>{dataJson.list.volume}: {dataJson.usd}{UseFormatCount(data.total_volume)}</div>
                                    <div>{dataJson.list.ath}: {dataJson.usd}{UseFormatCount(data.ath)}</div>
                                </div>
                            </td>
                            <td>
                                <div className={`${Styles.dFlex} ${Styles.flexColumn}`}>
                                    <div className={Styles.buttonContainer}>
                                        <button type="button" role="button" onClick={() => props.handleFavoritesClick(data)}><FavoriteComponent /></button>
                                    </div>
                                    <div className={Styles.buttonContainer}>
                                        <button type="button" onClick={() =>  props.handleIdClick(data)}><MoreComponent /></button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            ))}
        </div>
    )
}

export default CryptoList;