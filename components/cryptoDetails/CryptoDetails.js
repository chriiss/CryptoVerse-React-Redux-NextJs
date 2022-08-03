import React from 'react';
import Back from './backComponent/Back';
import Rank from './rankComponent/Rank';
import Categories from './categoriesComponent/Categories';
import Coin from './coinComponent/Coin';
import CoinRange from './coinRangeComponent/CoinRange';
import CoinInfo from './coinInfoComponent/CoinInfo';
import CoinOtherInfo from './coinOtherInfoComponent/CoinOtherInfo';
import PricePercentage from './pricePercentageComponent/PricePercentage';
import Description from './descriptionComponent/Description';
import Market from './marketComponent/Market';
import StylesCryptoDetails from "../../styles/CryptoDetails.module.scss";
import TopButton from '../topButtonComponent/TopButton';


const CryptoDetails = () => {
    return (
        <>
            <header className={StylesCryptoDetails.header}>
                <Back />
            </header>
            <section className={StylesCryptoDetails.rankBloc}>
                <Rank />
            </section>
            <section className={StylesCryptoDetails.categoriesBloc}>
                <Categories />
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
            <section className={StylesCryptoDetails.descriptionBloc}>
                <Description />
            </section>
            <section className={StylesCryptoDetails.marketBloc}>
                <Market />
            </section>
            <section>
                <TopButton />
            </section>
        </>
    )
}


export default CryptoDetails;