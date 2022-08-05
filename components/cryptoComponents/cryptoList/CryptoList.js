import React, { useEffect, useCallback } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import UseFormatCount from '../../../hooks/UseFormatCount';
import UseShortNumber from '../../../hooks/UseShortNumber';
import { addCryptos, getAllCryptos, addCryptosPage, getCryptosPage, getSearch, addCryptosFetching, getCryptosFetching } from '../../../store/Slice';
import Loading from './loadingComponent/Loading';
import dataJson from "../../../data/Data.json";
import Styles from '../../../styles/Home.module.scss';

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

    const getCryptoData = useCallback(async () => {
        await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${page}&sparkline=false`).then((res) => {
            dispatch(addCryptos([...cryptoApi, ...res.data]));
            dispatch(addCryptosPage(page + 1));
            dispatch(addCryptosFetching(false));
        });
    }, [dispatch, cryptoApi, page]);

    const isScrolling = useCallback(() =>   {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
        dispatch(addCryptosFetching(true));
    }, [dispatch]);

    useEffect(() => {
        window.addEventListener("scroll", isScrolling);
        return () => window.removeEventListener("scroll", isScrolling);
    }, [isScrolling]);


    useEffect(() => {
        getCryptoData();
    }, []);

    useEffect(() => {
        if (isFetching) {
          getCryptoData();
        }
    }, [isFetching, getCryptoData]);

    if(cryptoApi.length === 0) return(<div><Loading /></div>)


    return(
        <div className={Styles.cryptoList}>
            <div className={Styles.result}>{cryptoResult.length} {dataJson.result}</div>
            <div className={`${Styles.dFlex} ${Styles.tableHeader}`}>
                <div className={Styles.coin}>{dataJson.cryptoListComponent.listHeader.coin}</div>
                <div>{dataJson.cryptoListComponent.listHeader.price}</div>
            </div>
            {cryptoResult.map((data, index) => (
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
                                    <span className={Styles.dFlex}>{dataJson.cryptoListComponent.list.hvol}:&nbsp;
                                        <div className={data.price_change_percentage_24h <= 0 ? Styles.red : Styles.green}>{UseShortNumber(data.price_change_percentage_24h)}{dataJson.percent}
                                        </div>
                                    </span>
                                    <div>{dataJson.cryptoListComponent.list.total_cap}: {dataJson.usd}{UseFormatCount(data.market_cap)}</div>
                                    <div>{dataJson.cryptoListComponent.list.volume}: {dataJson.usd}{UseFormatCount(data.total_volume)}</div>
                                    <div>{dataJson.cryptoListComponent.list.ath}: {dataJson.usd}{UseFormatCount(data.ath)}</div>
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