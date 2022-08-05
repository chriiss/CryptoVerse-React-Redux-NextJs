import React from 'react';
import { useSelector } from "react-redux";
import Image from 'next/image';
import dataJson from "../../../data/Data.json";
import { getFav, getSearch } from '../../../store/Slice';
import UseFormatCount from '../../../hooks/UseFormatCount';
import UseShortNumber from '../../../hooks/UseShortNumber';
import MoreComponent from '../../moreComponents/More';
import Styles from '../../../styles/Home.module.scss';
import FavStyles from '../../../styles/Favorite.module.scss';

const FavoriteList = (props) => {
    const FavoriteComponent = props.favoritesComponent;
    const query = useSelector(getSearch);
	const favorite = useSelector(getFav);
    const cryptoResultFav = favorite.filter((data)=>
        data.name.toLowerCase().includes(query.toLowerCase()) ||
        data.symbol.toLowerCase().includes(query.toLowerCase())
    )

    return(
        <div className={FavStyles.favorite}>
            {cryptoResultFav.map((data, index) => (
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
                                        <button type="button" role="button"  onClick={() =>  props.handleIdClick(data)}><MoreComponent /></button>
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

export default FavoriteList;