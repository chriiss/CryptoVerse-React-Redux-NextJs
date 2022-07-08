import React, { useEffect } from 'React';
import { useDispatch } from 'react-redux';
import cryptoData from "../pages/api/CryptoApi";
import { addCryptos } from "../store/Slice";
import SearchBox from './SearchBox';
import FilterList from './FilterList';
import CryptoList from './CryptoList';


const Crypto = () => {

    const dispatch = useDispatch();

    const getCryptoData = async () => {
        await cryptoData
        .then(result => dispatch(addCryptos(result.data)))
    }


    return (
        <div>
            <SearchBox />
            <FilterList />
            <CryptoList />
        </div>
    )

}

export default Crypto;