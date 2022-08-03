import React from 'react';
import { useSelector } from 'react-redux';
import { getDetail } from '../../../store/Slice';
import UseFormatCount from '../../../hooks/UseFormatCount';
import dataJson from '../../../data/Data.json';
import StylesCryptoDetails from "../../../styles/CryptoDetails.module.scss";


const Market = () => {
    const details = useSelector(getDetail);
    const dataCryptoDetails = dataJson.cryptoDetailsComponent;
    return(
        <>
            <h4>{details.name} {dataCryptoDetails.market.market}</h4>
            <div className={`${StylesCryptoDetails.dFlex} ${StylesCryptoDetails.tableHeader}`}>
                <div className={StylesCryptoDetails.coin}>{dataCryptoDetails.market.headerTable.exchanges}</div>
                <div className={StylesCryptoDetails.coin}>{dataCryptoDetails.market.headerTable.pairs}</div>
                <div>{dataCryptoDetails.market.headerTable.confidence}</div>
            </div>
            {details.tickers?.map((data, i) => {
                return (
                    <table className={StylesCryptoDetails.marketBloc_table} key={i}>
                        <tbody>
                            <tr>
                                <td>{data.market.name}</td>
                                <td>
                                    <div className={StylesCryptoDetails.marketBloc_table_elementPairs}>
                                        <div>{data.base}</div>
                                        <div>{data.target}</div>
                                    </div>
                                </td>
                                <td>
                                    <div className={StylesCryptoDetails.marketBloc_table_element}>
                                        <div>{dataCryptoDetails.market.course}: {dataJson.usd}{UseFormatCount(data.last)}</div>
                                        <div>{dataCryptoDetails.market.vol}: {dataJson.usd}{UseFormatCount(data.volume)}</div>
                                    </div>
                                </td>
                                <td className={`${data.trust_score == "green" ? StylesCryptoDetails.green : null || data.trust_score == "yellow" ? StylesCryptoDetails.yellow : null || data.trust_score == "red" ? StylesCryptoDetails.red : null} ${StylesCryptoDetails.bold}`}>
                                    {data.trust_score}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                )
            })}
        </>

    )
}

export default Market;