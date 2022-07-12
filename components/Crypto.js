import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cryptoData from "../pages/api/CryptoApi";
import { addCryptos, addFav } from "../store/Slice";
import { getFav } from '../store/Slice';
import SearchBox from './SearchBox';
import FilterList from './FilterList';
import CryptoList from './CryptoList';
import AddFavorite from './favoritesComponents/AddFavorite';
import Link from 'next/link';
import { useRouter } from 'next/router'



const Crypto = () => {
    const dispatch = useDispatch();
    const favorite = useSelector(getFav);
    const router = useRouter()

    const getCryptoData = async () => {
        await cryptoData
        .then(result => {
            dispatch(addCryptos(result.data))
        })
    }

    useEffect(() => {
        getCryptoData();
    })

    useEffect(() => {
		try {
            const coinFavorites = JSON.parse(localStorage.getItem('coin-favorites') || []);
		    dispatch(addFav((coinFavorites)));
        }catch(e){}
	},[]);

    const saveToCoinFav = (items) => {
		localStorage.setItem('coin-favorites', JSON.stringify(items));
	};

    const addFavoriteCoin = (coin) => {
        const newFavoriteList = [...favorite, coin];
        dispatch(addFav(newFavoriteList));
        saveToCoinFav(newFavoriteList);
        router.push('/favoritePage')
    }

    return (
        <div>
            <Link href="/favoritePage">Favorite</Link>
            <SearchBox />
            <FilterList />
            <CryptoList favoritesComponent={AddFavorite} handleFavoritesClick={addFavoriteCoin} />
        </div>
    )

}

export default Crypto;