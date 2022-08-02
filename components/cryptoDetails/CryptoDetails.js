import React from 'react';
import { useSelector } from 'react-redux';
import useTagDelete from '../../hooks/useTagDelete';
import { getDetail } from '../../store/Slice';
import Back from './backComponent/Back';
import Rank from './rankComponent/Rank';
import Coin from './coinComponent/Coin';
import CoinRange from './coinRangeComponent/CoinRange';
import CoinInfo from './coinInfoComponent/CoinInfo';
import CoinOtherInfo from './coinOtherInfoComponent/CoinOtherInfo';
import PricePercentage from './pricePercentageComponent/PricePercentage';
import StylesCryptoDetails from "../../styles/CryptoDetails.module.scss";




const CryptoDetails = () => {
    const details = useSelector(getDetail);

    return (
        <>
            <header className={StylesCryptoDetails.header}>
                <Back />
            </header>
            <section className={StylesCryptoDetails.rankBloc}>
                <Rank />
            </section>
            <section className={`${StylesCryptoDetails.dFlex} ${StylesCryptoDetails.coinBloc}`}>
                <Coin />
            </section>
            <section className={`${StylesCryptoDetails.dFlex} ${StylesCryptoDetails.marketDataBloc}`}>
                <CoinRange />
            </section>
            <section className={StylesCryptoDetails.coinInfo}>
                <CoinInfo />
            </section>
            <section className={StylesCryptoDetails.otherInfoBloc}>
                <CoinOtherInfo />
            </section>
            <section className={`${StylesCryptoDetails.dFlex} ${StylesCryptoDetails.pricePercentageBloc}`}>
                <PricePercentage />
            </section>
            <section className={StylesCryptoDetails.tabs}>
                <ul className={StylesCryptoDetails.nav}>
                    <li>{useTagDelete(details.description?.en)}</li>
                    <li>{details.tickers?.map((data, i) => {
                        return (
                            <div key={i}>
                                {data.market.name}
                                {data.base}
                                {data.target}
                                {data.last}
                                {data.volume}
                                {data.trust_score}
                            </div>
                        )
                    })}</li>
                </ul>
            </section>
        </>
    )
}


export default CryptoDetails;